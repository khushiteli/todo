import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import {auth} from "../config/firebase"
import InputSlice from './inputSlice';
import GoogleLoginContainer from './googleLoginContainer';

const EmailContainer = ({ setCurrentUser, setContainer }) => {
  const [value, setvalue] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, value.email, value.pass)
      .then(
        (userCredential) => {
          console.log("user --> ", userCredential);
          console.log(userCredential.user); //user object when user create successfully
          setCurrentUser(userCredential.user);
        },
        setvalue(() => {
          value.email = " ";
          value.pass = " ";
        }),
        console.log("User loged in successfully"),
        navigate('/')
      )
      .catch((error) => {
        setErrorMsg(error.code);
        setvalue(() => {
          value.email = "";
          value.pass = "";
        });
        console.log(error);
        console.log("response status : ", error.code);
        console.log("Error msg : ", error.message);
      });
  };

  return (
    <div className="flex flex-col gap-5">
      <InputSlice setvalue={setvalue} value={value} />
      <div className="text-red font-medium -mb-5">{errorMsg}</div>
      <button
        onClick={() => {
          setContainer("NumberLoginContainer");
        }}
        className="underline cursor-pointer text-end -mb-4"
      >
        Continue with number
      </button>
      <button
        className="bg-blue text-white rounded-full py-2 text-lg "
        onClick={submitHandler}
      >
        Sign up
      </button>
      <GoogleLoginContainer />
    </div>
  );
};

export default EmailContainer
