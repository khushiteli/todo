import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

import {
  auth,
  setPersistence,
  indexedDBLocalPersistence,
  // browserSessionPersistence,
} from "../config/firebase";

const GoogleLoginContainer = () => {

  const navigate = useNavigate();
  
  const signWithGoogleHandler = () => {
    
    setPersistence(auth, indexedDBLocalPersistence)
      .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.

        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("token --> ", token); //access token in gogle sign in
            // The signed-in user info.
            const user = result.user;
            console.log("user --> ", user); //google sign in user details

            // setCurrentUser(user);
            console.log("user loged in success");
            navigate("/");
          })
          .catch((error) => {
            console.log("Error occurance --> ", error);
            // The email of the user's account used.
            // const email = error.customData.email;
            // console.log("email --> ", email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("credential --> ", credential);
            // ...
          });
      })
      .catch((error) => {
        // Handle Errors here.
        console.log("error durinng login with google --> ", error);
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
    };

  return (
    <button
      className="flex items-center bg-google-blue py-1 gap-2 text-white rounded-sm w-[85%]"
      onClick={signWithGoogleHandler}
    >
      <img
        alt="google"
        className="bg-white p-[2px] ml-1"
        height="250px"
        width="25px"
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
      Continue with google
    </button>
  );
}

export default GoogleLoginContainer
