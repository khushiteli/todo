import React, { useEffect, useState } from "react";
import { auth, RecaptchaVerifier } from "../config/firebase";

import {
  NumberLoginContainer,
  EmailLoginContainer,
  VerifyOTPContainer,
} from "../components";

const SignUp = () => {

  const [container, setContainer] = useState("EmailContainer");

  useEffect(() => {
    onCaptchVerify();
  }, []);

  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
          },
          "expired-callback": () => {
          },
        }
      );
    }
  };

  return (
    <div className="w-3/4 h-3/4 shadow-2xl flex rounded-lg overflow-hidden">
      <div className="w-[50%] flex flex-col items-center justify-center gap-5">
        <h3 className="font-bold text-3xl text-blue">Hello friend!</h3>

        {container === "EmailContainer" && (
          <EmailLoginContainer setContainer={setContainer} />
        )}

        {container === "NumberLoginContainer" && (
          <NumberLoginContainer setContainer={setContainer} />
        )}

        {container === "VerifyOTPContainer" && <VerifyOTPContainer />}

        <div id="recaptcha-container"></div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center gap-5 bg-blue px-5">
        <h3 className="font-bold text-3xl text-white">Glad to see you ! </h3>
        <p className="text-lg text-white">
          Lorem ipsum dolor sit amet. Qui laboriosam consequatur qui dolore
          necessitatibus qui sunt quod non dolor laboriosam sit possimus rerum
        </p>
      </div>
    </div>
  );
};

export default SignUp;

/* 
  all import statements 
    2 category 
      1-> package imports
      2-> custom imports
      
  all hooks or life-cycle methods
  
  all useEffects

  make a single state for all like not in boolean try using string value

  create 3 components -> 
    1-> emailContainer
    2-> NumberContainer
    3-> OTPContainer
    
  set loader when api calling 
  
  user will not able to click again and again 
  if api calling is running then disable all others

  in UI 

  otp input not matching with theme

            sign up
                or
        num | google
        
  add log out also
   
  learn about 3 types of storage like session storage , local storage, cookies
  set expiry of log in 
*/
