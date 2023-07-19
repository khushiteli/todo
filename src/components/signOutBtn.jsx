import React from 'react'
import {signOut} from 'firebase/auth'

import {auth} from "../config/firebase"
import { Link } from 'react-router-dom';

const SignOutBtn = () => {
     const signOutHandler = ({ setLoggedIn }) => {
       signOut(auth)
         .then(() => {
           // Sign-out successful.
           // navigate("/");
           console.log("Signed out successfully");
           setLoggedIn(null);
         })
         .catch((error) => {
           // An error happened.
         });
     };
    
  return (
    <Link to="/login">
      <button
        className="absolute top-1 right-3 bg-blue p-2 text-white rounded-lg"
        onClick={signOutHandler}
      >
        Sign out
      </button>
    </Link>
  );
}

export default SignOutBtn
