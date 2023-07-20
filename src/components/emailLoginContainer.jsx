import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import {
  auth,
  setPersistence,
  indexedDBLocalPersistence,
} from "../config/firebase";

import InputSlice from './inputSlice';
import GoogleLoginContainer from './googleLoginContainer';

const EmailLoginContainer = ({ setCurrentUser, setContainer }) => {
  const [value, setvalue] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
     setErrorMsg("");
     setPersistence(auth, indexedDBLocalPersistence)
       .then(() => {
         createUserWithEmailAndPassword(auth, value.email, value.pass)
           .then(
             (userCredential) => {
               console.log("user --> ", userCredential);
               console.log(userCredential.user);
             },
             setvalue(() => {
               value.email = " ";
               value.pass = " ";
             }),
             console.log("User loged in successfully"),
             navigate("/")
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
       })
       .catch((error) => {
         console.log("error durinng login with google --> ", error);
       });
   };

  return (
    <div className="flex flex-col gap-5">
      <InputSlice setvalue={setvalue} value={value} />
      <div className="text-red font-medium -mb-5">{errorMsg}</div>
      <button
        className="bg-blue text-white rounded-full py-2 text-lg "
        onClick={submitHandler}
      >
        Sign up
      </button>
      <div className='flex justify-around items-center h-[32px]'>
        <GoogleLoginContainer />
        <button
          onClick={() => {
            setContainer("NumberLoginContainer");
          }}
          className=" cursor-pointer text-end w-[35px] h-[100%] flex justify-center items-center text-lg"
          title='Continue with phone number'
        >
          <i className="fa fa-phone" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default EmailLoginContainer;
