import { ThirdwebSDKProvider, Web3Button } from "@thirdweb-dev/react";
import { Signer } from "ethers";
import { THIRDWEB_API_KEY, chain } from "../lib/constants";
import { NFT_ADDRESS } from "../const/addresses";
import Swal from "sweetalert2";

export const Connected = ({
  username,
  signer,
  walletAddress,
}: {
  username: string;
  signer: Signer;
  walletAddress: string;
}) => {
  return (
    <ThirdwebSDKProvider
      signer={signer}
      activeChain={chain}
      clientId={THIRDWEB_API_KEY || ""}
    >
      <p>
        Connected as <b>{username}</b>
      </p>
      <p>
        <b>{walletAddress}</b>
      </p>
      <br />
      <Web3Button
        contractAddress={NFT_ADDRESS}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={(result) => {
          const transaction =
            "https://mumbai.polygonscan.com/tx/" +
            result[0].receipt.transactionHash;
          Swal.fire(
            "Rewards Claimed!",
            `Transaction Hash: <a style="text-decoration: underline" target="_blank" rel="noopener noreferrer" href=${transaction}><b>${result[0].receipt.transactionHash}</b></a>`,
            "success"
          );
        }}
      >
        Claim Reward
      </Web3Button>
    </ThirdwebSDKProvider>
  );
};
