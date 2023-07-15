import React, { useState } from 'react'
import "../App.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import FormSlice from '../components/formSlice';
import InputSlice from '../components/inputSlice';

const SignUp = () => {
  const [value, setvalue] = useState({
    email: " ",
    pass: " "
  });
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = () => {
    setErrorMsg("");
    createUserWithEmailAndPassword(auth, value.email, value.pass).then(
      (userCredential) => {
        console.log(userCredential.user);
      }
    )
      .catch((error) => {
        setErrorMsg(error.code);
        console.log(error);
      console.log("response status : ", error.code);
      console.log("Error msg : ", error.message);
  });

  }

  return (
    <div className="w-3/4 h-3/4 shadow-2xl flex rounded-lg overflow-hidden">
      <div className="w-[50%] flex flex-col items-center justify-center gap-5">
        <h3 className="font-bold text-3xl text-blue">Hello friend!</h3>
        <div className="flex flex-col gap-5">
          <InputSlice setvalue={setvalue} />
          <div className='text-red font-medium -mb-5'>{errorMsg}</div>
          <button
            className="bg-blue text-white rounded-full py-2 text-lg "
            onClick={submitHandler}
          >
            Sign up
          </button>
        </div>
      </div>
      <FormSlice /> 
    </div>
  );
}

export default SignUp
