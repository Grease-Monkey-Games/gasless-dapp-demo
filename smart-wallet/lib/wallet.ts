import { LocalWallet, SmartWallet, PaperWallet, EthersWallet } from "@thirdweb-dev/wallets";
import {
  NEW_ACCOUNT_ABI,
  factoryAddress,
  accountFactoryAddress,
} from "./constants";
import {
  ThirdwebSDK,
  Transaction,
  isContractDeployed,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import axios from "axios";
import { AuthLoginReturnType } from "@paperxyz/embedded-wallet-service-sdk";
import { Mumbai } from "@thirdweb-dev/chains";

export function createSmartWallet(): SmartWallet {
  const smartWallet = new SmartWallet({
    chain: "mumbai",
    factoryAddress: factoryAddress,
    gasless: true,
    clientId: "2d67c736af17b955a36483b753a95192",
    //secretKey:
    //  "MU492YZNc7bY4Eb8rHMzMDsOONwDfF4-B96o7hd1e3IvbI-ah5oKo64UvxK78uhAzpWs7FhCSbuplBSn7tRKYQ",
  });
  return smartWallet;
}

export function createSmartWalletWithEmail(): SmartWallet {
  const smartWallet = new SmartWallet({
    chain: "mumbai",
    factoryAddress: accountFactoryAddress,
    gasless: true,
    clientId: "2d67c736af17b955a36483b753a95192",
    //secretKey:
    //  "MU492YZNc7bY4Eb8rHMzMDsOONwDfF4-B96o7hd1e3IvbI-ah5oKo64UvxK78uhAzpWs7FhCSbuplBSn7tRKYQ",
  });
  return smartWallet;
}

export async function getWalletAddressForUser(
  sdk: ThirdwebSDK,
  username: string
): Promise<string> {
  const factory = await sdk.getContract(factoryAddress);
  const smartWalletAddress: string = await factory.call("accountOfUsername", [
    username,
  ]);
  return smartWalletAddress;
}

export async function connectToSmartWallet(
  username: string,
  pwd: string,
  statusCallback?: (status: string) => void
): Promise<SmartWallet> {
  statusCallback?.("Checking username...");
  const sdk = new ThirdwebSDK("mumbai", {
    clientId: "2d67c736af17b955a36483b753a95192",
  });
  const smartWalletAddress = await getWalletAddressForUser(sdk, username);
  const isDeployed = await isContractDeployed(
    smartWalletAddress,
    sdk.getProvider()
  );

  const smartWallet = createSmartWallet();
  const personalWallet = new LocalWallet();

  if (isDeployed) {
    statusCallback?.("Username exists, accessing onchain data...");
    // CASE 2 - existing wallet - fetch metadata, decrypt, load local wallet, connect
    // download encrypted wallet from IPFS
    //const contract = await sdk.getContract(smartWalletAddress);
    const contract = new ethers.Contract(
      smartWalletAddress,
      NEW_ACCOUNT_ABI,
      sdk.getProvider()
    );
    //const metadata = await contract.metadata.get();
    let metadataUri = await contract.contractURI();
    metadataUri = metadataUri.replace(/(^\w+:|^)\/\//, "");
    const metadata = await axios.get(`https://ipfs.io/ipfs/${metadataUri}`);
    console.log(metadata.data);
    console.log("Fetching wallet for", metadata.data.name);
    const encryptedWallet = metadata.data.encryptedWallet;
    if (!encryptedWallet) {
      throw new Error("No encrypted wallet found");
    }
    statusCallback?.("Decrypting personal wallet...");
    // wait before importing as it blocks the main thread rendering
    await new Promise((resolve) => setTimeout(resolve, 300));
    await personalWallet.import({
      encryptedJson: encryptedWallet,
      password: pwd,
    });

    statusCallback?.("Connecting...");
    await smartWallet.connect({
      personalWallet,
    });
  } else {
    statusCallback?.("New username, generating personal wallet...");
    // CASE 1 - fresh start - create local wallet, encrypt, connect, call register on account with username + metadata
    // generate local wallet
    await personalWallet.generate();
    // encrypt it
    const encryptedWallet = await personalWallet.export({
      strategy: "encryptedJson",
      password: pwd,
    });

    await smartWallet.connect({
      personalWallet,
    });

    // register account
    // upload encrypted wallet to IPFS
    statusCallback?.("Uploading encrypted wallet to IPFS...");
    const encryptedWalletUri = await sdk.storage.upload({
      name: username,
      encryptedWallet,
    });

    statusCallback?.(`Deploying & registering username onchain...`);
    // this will deploy the smart wallet and register the username
    await smartWallet.execute(
      await Transaction.fromContractInfo({
        contractAddress: await smartWallet.getAddress(),
        contractAbi: NEW_ACCOUNT_ABI,
        provider: sdk.getProvider(),
        signer: await personalWallet.getSigner(),
        method: "register",
        args: [username, encryptedWalletUri],
        storage: sdk.storage,
      })
    );
  }

  return smartWallet;
}

export async function connectToSmartWalletWithPaper(
  paperWallet: PaperWallet
): Promise<SmartWallet | null> {
  try {
 
    console.log("paperWallet: ", paperWallet);

    const smartWallet = createSmartWalletWithEmail();
    console.log("smartWallet: ", smartWallet);
    await smartWallet.connect({
      personalWallet: paperWallet,
    });
    console.log("smartWallet connected!!!");
    return smartWallet;
  } catch (e) {
    return null;
  }
}
