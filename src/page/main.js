import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "../config/config.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const swap = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        swap("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(`${error.code}`)
      });
  };
  const [Note,useNote]=useState("");
  const [editHistory, setEditHistory] = useState([]);
  const handleSaveNote = () => {
    if (note.trim() !== "") {
      setEditHistory([...editHistory, { note, timestamp: new Date() }]);
    }
  };

  return (
    <>
      <div className="mx-auto container py-20 px-6">
        
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};
export default Main;
