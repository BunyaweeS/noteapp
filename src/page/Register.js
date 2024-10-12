import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import {auth} from "../config/config.js"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import swal from "sweetalert";
const Register =()=>{
    const swap = useNavigate();
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const handleSub =async(e)=> {
        e.preventDefault()
        await createUserWithEmailAndPassword(auth, user, pass)
          .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
              swap("/Login")
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              swal("Sorry!", `${error.code}`, "error");
              
          });
    }
    
    return (
        <>
       <section className="bg-gradient-to-tl from-blue to bg-skyblue ">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-gradient-to-r from-skyblue to bg-lightpurple rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Register
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                      <input onChange={(e)=>setUser(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your @ email" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div> 
                  <button onClick={handleSub} type="submit" className="bg-gradient-to-r from-skyblue to bg-lightgreen w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-darkblue ">Confirm</button>
              </div>
              <div className="">
                <a href="/Login" className="text-right text-blue">Already have a account?</a>
              </div>
          </div>
      </div>
  </div>
</section>

        </>
    );};
    
    
export default Register
