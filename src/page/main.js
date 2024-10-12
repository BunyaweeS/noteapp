import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "../config/config.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const swap = useNavigate();
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Work");
  const [editHistory, setEditHistory] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [sortOption, setSortOption] = useState("date");
  const [isEditing, setIsEditing] = useState(null); 
  const [noteHistory, setNoteHistory] = useState({}); 

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email); 
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(editHistory));
  }, [editHistory]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        swap("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.log("Error signing out: ", error);
      });
  };

  const handleSaveNote = () => {
    if (note.trim() !== "") {
      const newNote = {
        note,
        category,
        user: email || "Anonymous",
        timestamp: new Date(),
        history: [] 
      };
      setEditHistory([...editHistory, newNote]);
      setNote(""); 
    }
  };

  const handleEditNote = (index) => {
    setIsEditing(index); 
    setNote(editHistory[index].note); 
  };

  const handleSaveEdit = (index) => {
    const updatedNote = {
      ...editHistory[index],
      note, 
      timestamp: new Date() 
    };

    const updatedHistory = [...editHistory];
    updatedHistory[index] = updatedNote;

    const updatedNoteHistory = { ...noteHistory };
    if (!updatedNoteHistory[index]) {
      updatedNoteHistory[index] = [];
    }
    updatedNoteHistory[index].push({
      note: editHistory[index].note,
      timestamp: editHistory[index].timestamp
    });

    setNoteHistory(updatedNoteHistory);
    setEditHistory(updatedHistory);
    setIsEditing(null); 
    setNote(""); 
  };

  const sortedHistory = [...editHistory].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortOption === "category") {
      return a.category.localeCompare(b.category); 
    }
    return 0;
  });

  return (
    <>
    <div className="bg-gradient-to-b from-darkblue via bg-spruce to to-banana">
      <div className="mx-auto container py-20 px-6 ">
        <div>
          <label className="text-banana">Note:</label>
          <textarea 
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="border p-2 w-full rounded-lg bg-pearl"
            placeholder="text here"
          />
        </div>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {isEditing !== null ? (
          <button onClick={() => handleSaveEdit(isEditing)} className="bg-green-500 text-white px-4 py-2 mt-4 bg-aqua">
            Save Edit
          </button>
        ) : (
          <button onClick={handleSaveNote} className="bg-blue-500 text-white px-4 py-2 mt-4 bg-aqua rounded-lg">
            Save Note
          </button>
        )}

        <div className="mt-4">
          <label>Sort By:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="date">Date</option>
            <option value="category">Category</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {sortedHistory.map((item, index) => (
            <div key={index} className="rounded">
              <div className="w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-skyblue dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
                <div>
                  <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{item.category}</h4>
                  <p className="text-gray-800 dark:text-gray-100 text-sm">{item.note}</p>
                </div>
                <div className="mt-4 text-gray-600 dark:text-gray-400">
                  <p>By: {item.user}</p>
                  <p>Date: {item.timestamp.toLocaleString()}</p>
                  {email === item.user && (
                    <button
                      onClick={() => handleEditNote(index)}
                      className="bg-yellow-500 text-white px-2 py-1 mt-2"
                    >
                      Edit
                    </button>
                  )}
                </div>
                {noteHistory[index] && (
                  <div className="mt-4">
                    <h5>Note History:</h5>
                    {noteHistory[index].map((historyItem, historyIndex) => (
                      <div key={historyIndex} className="text-gray-600">
                        <p>{historyItem.note}</p>
                        <p>Date: {new Date(historyItem.timestamp).toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
        </div>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 bg-darkblue rounded-lg mx-auto ">
          Logout
        </button>
      </div>

      <div>
        
      </div>
      </div>
    </>
  );
};

export default Main;
