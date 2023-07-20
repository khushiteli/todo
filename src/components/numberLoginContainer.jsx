import React , {useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { signInWithPhoneNumber } from 'firebase/auth';
import { toast } from 'react-hot-toast';

import {
  auth,
  setPersistence,
  indexedDBLocalPersistence,
} from "../config/firebase";

const NumberLoginContainer = ({ setContainer }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);

    const onSignInSubmit = () => {
      setPersistence(auth, indexedDBLocalPersistence)
        .then(() => {
          setLoading(true);
          const appVerifier = window.recaptchaVerifier;
          const formatPh = "+" + phoneNumber;

          signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
              console.log(confirmationResult);
              window.confirmationResult = confirmationResult;
              setContainer("VerifyOTPContainer");
              toast.success("OTP sended successfully!");
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              setLoading(false);
            });
        })
        .catch((error) => {
          console.log("error durinng login with google --> ", error);
        });
    };

  return (
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
  );
};

export default NumberLoginContainer
