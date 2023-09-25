import { useState } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { connectToSmartWalletWithPaper } from "../lib/wallet";
import { Connected } from "../components/Connected";
import Swal from "sweetalert2";
import Head from "next/head";
import {
  PaperEmbeddedWalletSdk,
  UserStatus,
} from "@paperxyz/embedded-wallet-service-sdk";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ThirdwebProvider,
  paperWallet,
  smartWallet,
  useWalletContext
} from "@thirdweb-dev/react";
import { FACTORY_ADDRESS } from "../const/addresses";

export const paperConfig = paperWallet({
  paperClientId: "9a67898a-341a-4e51-9688-197bc7ac9027",
});

const PaperWalletPage: NextPage = () => {
  const [signer, setSigner] = useState<any>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [verifyOtpErrorMessage, setVerifyOtpErrorMessage] = useState("");
  const [sendOtpErrorMessage, setSendOtpErrorMessage] = useState("");
  const [otpCode, setOtpCode] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { createWalletInstance, setConnectedWallet } = useWalletContext();
  const [error, setError] = useState("");
  const [sendEmailOtpResult, setSendEmailOtpResult] = useState<
    | {
        isNewUser: boolean;
        isNewDevice: boolean;
      }
    | undefined
  >(undefined);
  

  const formik = useFormik({
    initialValues: {
      userEmail: "",
    },
    onSubmit: function (values) {
      console.log(`Email valid: ${values.userEmail}`);
    },
    validate: function (values) {
      const errors = {
        userEmail: "",
      };
      if (!values.userEmail) {
        errors.userEmail = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)
      ) {
        errors.userEmail = "Not a valid email";
      } else {
        errors.userEmail = "";
      }
      return errors;
    },
  });

  const connectWallet = async (event: any) => {
    event.preventDefault();
    if (formik.errors.userEmail === "") {
      const sdk = new PaperEmbeddedWalletSdk({
        clientId: "9a67898a-341a-4e51-9688-197bc7ac9027",
        chain: "Mumbai",
      });
      const result = await sdk.auth.sendPaperEmailLoginOtp({
        email: formik.values.userEmail,
      });
      console.log(result);
      setSendEmailOtpResult(result);
    } else {
      Swal.fire(
        "Invalid Email!",
        "Please, provide a valid email address",
        "error"
      );
    }
  };

  const finishHeadlessOtpLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    e.preventDefault();
    try {

      // create instance of paper wallet
      const paperWallet = createWalletInstance(paperConfig);

      // get paper sdk from paper wallet
      const sdk =  await paperWallet.getPaperSDK();

      const userObj = {
        email: formik.values.userEmail || "",
        otp: otpCode || "",
      };

      // connect paper wallet verification happens here and will throw error if issue
      await paperWallet.connect({ email: userObj.email, otp: userObj.otp });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });


      const user = await sdk.getUser();
      console.log(user.status);
      console.log(user);
      //const userPaperWallet = user.wallet;
      if (user.status === UserStatus.LOGGED_IN_WALLET_INITIALIZED) {

        // pass paper wallet
        const smartWallet = await connectToSmartWalletWithPaper(paperWallet);
        if (smartWallet !== null) {
          Swal.fire(
            "Smart Wallet Created!",
            `Your address is: <b>${smartWallet.getAddress()}</b>`,
            "success"
          );
        } else {
          Swal.fire(
            "Error Creating Smart Wallet!",
            "Please, try again",
            "error"
          );
        }
      }
    

    } catch (e) {
      console.error("ERROR verifying otp", e);
      setVerifyOtpErrorMessage(`${(e as any).message}. Please try again`);
    }
    setIsLoading(false);
  };

  const loginWithThirdwebEmailOtpHeadless = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const sdk = new PaperEmbeddedWalletSdk({
        clientId: "9a67898a-341a-4e51-9688-197bc7ac9027",
        chain: "Mumbai",
      });
      const result = await sdk.auth.sendPaperEmailLoginOtp({
        email: formik.values.userEmail || "",
      });
      console.log("sendPaperEmailLoginOtp result", result);
      setSendEmailOtpResult(result);
    } catch (e) {
      if (e instanceof Error) {
        setSendOtpErrorMessage(`${e.message}. Please try again later.`);
      }
      console.error(
        "Something went wrong sending otp email in headless flow",
        e
      );
    }
    setIsLoading(false);
  };

  return signer ? (
    <>
      <Head>
        <title>Paper Wallet Method</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Paper Wallet Method</h1>
          <br />
          <Connected
            signer={signer}
            username={formik.values.userEmail}
            walletAddress={walletAddress}
          />
        </main>
      </div>
    </>
  ) : sendEmailOtpResult ? (
    <>
      <ChakraProvider>
        <FormControl as={Stack} isInvalid={!!verifyOtpErrorMessage}>
          <Input
            type="text"
            inputMode="decimal"
            placeholder="Otp Code"
            value={otpCode || ""}
            onChange={(e) => {
              setOtpCode(e.target.value);
            }}
          />
          {!!verifyOtpErrorMessage && !sendEmailOtpResult.isNewDevice && (
            <FormErrorMessage>{verifyOtpErrorMessage}</FormErrorMessage>
          )}
        </FormControl>

        <Button
          type="submit"
          onClick={finishHeadlessOtpLogin}
          disabled={!formik.values.userEmail || !otpCode}
          isLoading={isLoading}
        >
          verify and finish headless login
        </Button>
        <Button
          onClick={loginWithThirdwebEmailOtpHeadless}
          variant="ghost"
          size="sm"
        >
          Request New Code
        </Button>
        <Button
          variant={"ghost"}
          w="fit-content"
          onClick={() => {
            setOtpCode("");
            setSendEmailOtpResult(undefined);
          }}
        >
          Back
        </Button>
      </ChakraProvider>
    </>
  ) : (
    <>
      <Head>
        <title>Paper Wallet Method</title>
      </Head>
      <ThirdwebProvider
        clientId="dca20a5be1ee008e94f1063a94dd7dbb"
        activeChain="mumbai"
        supportedWallets={[
          smartWallet({
            factoryAddress: FACTORY_ADDRESS,
            gasless: true,
            personalWallets: [
              paperConfig,
            ],
          }),
        ]}
      >
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>Paper Wallet Method</h1>
            <br />
            <form>
              <label>
                Email:
                <input
                  style={{ marginLeft: "5px", width: "350px" }}
                  type="email"
                  name="userEmail"
                  onChange={formik.handleChange}
                />
              </label>
              <br />
              <br />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                style={{ marginLeft: "140px" }}
                onClick={(e) => connectWallet(e)}
              >
                Connect Wallet
              </button>
            </form>
          </main>
        </div>
      </ThirdwebProvider>
    </>
  );
};

export default PaperWalletPage;
