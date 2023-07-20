import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const VerifyOTPContainer = ({ setText }) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const verfyOTPHandler = () => {
    // sign in user if otp valid
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("user --> ", res?.user);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
        inputStyle={{ border: "1px solid grey", borderRadius: "2px" }}
        renderInput={(props) => <input {...props} />}
      />
      <button
        className="bg-blue text-white rounded-full py-2 text-lg px-5"
        onClick={verfyOTPHandler}
      >
        Verfy OTP
      </button>
    </div>
  );
};

export default VerifyOTPContainer
