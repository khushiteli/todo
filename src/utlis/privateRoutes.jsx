import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "../config/firebase";

const PrivateRoutes = (props) => {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const setLoggedIn = props.setLoggedIn;
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in ", user);
        setLoggedIn(true);
      } else {
        console.log("Logged out");
        setLoggedIn(false);
        navigate("/login");
      }
    });
    
    return () => unsubscribe();
  }, []); 

  return (
    <div>
      {isLoggedIn && props.element}
    </div>
  );
};

export default PrivateRoutes;