import React from 'react'
import {signOut} from 'firebase/auth'

import {auth} from "../config/firebase"
import { Link, useNavigate } from 'react-router-dom';

const SignOutBtn = () => {
  const navigate = useNavigate();

     const signOutHandler = ({ setLoggedIn }) => {
       signOut(auth)
         .then(() => {
           // Sign-out successful.
           navigate("/login");
           console.log("Signed out successfully");
           setLoggedIn(null);
         })
         .catch((error) => {
           // An error happened.
         });
     };
    
  return (
    <Link
      to="/login"
    >
      <button
        className={`bg-blue p-2 text-white rounded-lg`}
        onClick={signOutHandler}
      >
        Sign out
      </button>
    </Link>
  );
}

export default SignOutBtn
