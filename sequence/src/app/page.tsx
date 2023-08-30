"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { sequence } from "0xsequence";
import { ConnectOptions } from "0xsequence/dist/declarations/src/provider";
import { ethers } from "ethers";
import RewardContractABI from "../contracts/Reward.json";

const RewardContractAddress = "0x369A4d9Ee1286E23e78D51957a252b9eBb008e5d";

const AllowlistProof = {
  proof: ["0x0000000000000000000000000000000000000000000000000000000000000000"],
  quantityLimitPerWallet: 0,
  pricePerToken: 0,
  currency: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState("");
  const mumbaiChainId = "0x13881";

  // This assumes your dapp runs on Goerli and initiates the sequence wallet
  sequence.initWallet({ defaultNetwork: "mumbai" });

  const claimReward = async () => {
    try {
      const wallet = sequence.getWallet();

      if (wallet) {
        const signer = wallet.getSigner(mumbaiChainId);
        const RewardContract = new ethers.Contract(
          RewardContractAddress,
          RewardContractABI,
          signer
        );

        await RewardContract.claim(
          currentAccount,
          1,
          "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          0,
          AllowlistProof,
          "0x"
        )
          .then((response: any) => {
            console.log("Reward Claimed!", response);
          })
          .catch((err: any) => {
            console.log("Error occured while claiming reward", err);
          });
      } else {
        console.log("Wallet object doesn't exist!");
      }
    } catch (error) {
      console.log("Error claiming reward!", error);
    }
  };

  const disconnectWallet = async () => {
    const wallet = sequence.getWallet();
    wallet.disconnect().then(() => setCurrentAccount(""));
  };

  const openWallet = async () => {
    const wallet = sequence.getWallet();
    wallet.openWallet();
  };
  // Calls Sequence to connect wallet and update if there are any tasks already
  const connectWallet = async () => {
    const wallet = sequence.getWallet();

    const connectDetails = await wallet.connect({
      app: "Demo",
      authorize: true,
      settings: {
        theme: "dark",
      },
      networkId: mumbaiChainId,
    } as ConnectOptions);

    console.log(connectDetails);

    if (!connectDetails.connected) {
      console.log("User wallet not connected. Error:", connectDetails.error);
    } else if (connectDetails.connected) {
      console.log(
        "Users signed connect proof to valid their account address:",
        connectDetails.proof
      );
    }

    setCurrentAccount(connectDetails.session?.accountAddress as string);
  };

  return (
    <div className="main">
      {currentAccount === "" ? (
        <div className="flex items-center justify-center screen">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <h1
                    className="title"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Smart Wallet Method by Sequence
                  </h1>
                </Item>
              </Grid>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={connectWallet}
                  >
                    Connect Wallet
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      ) : (
        <div className="flex items-center justify-center screen">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <h1
                    className="title"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    Smart Wallet Method by Sequence
                  </h1>
                </Item>
              </Grid>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <button
                    type="submit"
                    onClick={openWallet}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Open Wallet
                  </button>
                </Item>
              </Grid>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <button
                    type="submit"
                    onClick={disconnectWallet}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Disconnect Wallet
                  </button>
                </Item>
              </Grid>
              <Grid item xs={12} style={{ backgroundColor: "black" }}>
                <Item style={{ backgroundColor: "black" }}>
                  <button
                    style={{ backgroundColor: "red" }}
                    type="submit"
                    onClick={claimReward}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Claim Reward
                  </button>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
    </div>
  );
}
