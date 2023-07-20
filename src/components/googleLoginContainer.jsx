import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import {
  auth,
  setPersistence,
  indexedDBLocalPersistence,
} from "../config/firebase";

const GoogleLoginContainer = () => {

  const navigate = useNavigate();
  
  const signWithGoogleHandler = () => {
    
    setPersistence(auth, indexedDBLocalPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("token --> ", token); 
            const user = result.user;
            console.log("user --> ", user); 
            console.log("user loged in success");
            navigate("/");
          })
          .catch((error) => {
            console.log("Error occurance --> ", error);
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("credential --> ", credential);
            // ...
          });
      })
      .catch((error) => {
        console.log("error durinng login with google --> ", error);
      });
    };

  return (
    <button
      className="flex items-cente py-1 gap-2 text-white rounded-sm w-[35px] h-[100%]"
      onClick={signWithGoogleHandler}
      title='Continue with google'
    >
      <img
        alt="google"
        className="bg-white p-[2px] ml-1"
        height="250px"
        width="25px"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
    </button>
  );
}

export default GoogleLoginContainer
