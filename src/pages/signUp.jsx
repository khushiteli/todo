import React, { useEffect, useState } from "react";
import "../App.css";
import {
  createUserWithEmailAndPassword,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth, RecaptchaVerifier } from "../config/firebase";
import FormSlice from "../components/formSlice";
import InputSlice from "../components/inputSlice";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { toast, Toaster } from "react-hot-toast";

const SignUp = () => {
  const [value, setvalue] = useState({
    email: " ",
    pass: " ",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [emailContainer, setEmailContainer] = useState(true);
  const [numberSignup, setNumberSignup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpContainer, setOtpContainer] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");

  const submitHandler = () => {
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(
        (userCredential) => {
          console.log(userCredential.user);
        },
        setvalue(() => {
          value.email = " ";
          value.pass = " ";
        })
        // setErrorMsg("User created please log in")
      )
      .catch((error) => {
        setErrorMsg(error.code);
        setvalue(() => {
          value.email = " ";
          value.pass = " ";
        });
        console.log(error);
        console.log("response status : ", error.code);
        console.log("Error msg : ", error.message);
      });
  };

  useEffect(() => {
    onCaptchVerify();
  }, []);

  const onSignInSubmit = () => {
    //send otp on number
    setLoading(true);
    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + phoneNumber;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        window.confirmationResult = confirmationResult;
        setOtpContainer(true);
        setNumberSignup(false);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const verfyOTPHandler = () => {
    // sign in user if otp valid
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setOtpContainer(false);
        setText("User signed in successfully :) ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignInSubmit();
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };

  return (
    <div className="w-3/4 h-3/4 shadow-2xl flex rounded-lg overflow-hidden">
      <div className="w-[50%] flex flex-col items-center justify-center gap-5">
        <h3 className="font-bold text-3xl text-blue">Hello friend!</h3>
        {/* email & password sign up */}
        {emailContainer && (
          <div className="flex flex-col gap-5">
            <InputSlice setvalue={setvalue} value={value} />
            <div className="text-red font-medium -mb-5">{errorMsg}</div>
            <button
              className="bg-blue text-white rounded-full py-2 text-lg "
              onClick={submitHandler}
            >
              Sign up
            </button>
            <div
              onClick={() => {
                setNumberSignup(true);
                setEmailContainer(false);
              }}
              className="underline cursor-pointer"
            >
              Continue with number
            </div>
          </div>
        )}

        <div id="recaptcha-container"></div>
        <div>{ text }</div>
        <Toaster toastOptions={{ duration: 4000 }} />

        {/* sign in with phone number */}
        {numberSignup && (
          <div className="flex flex-col gap-5">
            <PhoneInput
              country={"in"}
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
            />
            <button
              className="bg-blue text-white rounded-full py-2 text-lg "
              onClick={onSignInSubmit}
              disabled={loading}
            >
              Send OTP
            </button>
          </div>
        )}

        {/* verfy OTP */}
        {otpContainer && (
          <div className="flex flex-col gap-5">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              otpType="number"
              disabled={false}
              autoFocus
              containerStyle={{
                display: "flex",
                gap: "5px",
                justifyContent: "center",
              }}
              inputStyle={{ border: "1px solid #000", borderRadius: "5px" }}
              renderInput={(props) => <input {...props} />}
            />
            <button
              className="bg-blue text-white rounded-full py-2 text-lg px-5"
              onClick={verfyOTPHandler}
            >
              Verfy OTP
            </button>
          </div>
        )}
      </div>
      <FormSlice />
    </div>
  );
};

export default SignUp;
