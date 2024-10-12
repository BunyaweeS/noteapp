import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import {auth} from "../config/config.js"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import swal from 'sweetalert';
import ButtonComponent from "../component/buttoncomponent.js";

const Login =()=>{
    const swap = useNavigate();
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const handleSub =async(e)=> {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user, pass)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            swal({
                title: "Success",
                text: "Login success",
                icon: "success"
              }).then(() => {
                swap("/Main")
              });
            
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            swal("Oops!", "Something went wrong!", "error");
            
        });

    }
    
    return (
        <>
       <section className="bg-darkg">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-greengray rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-darkbrown md:text-2xl ">
                  Login
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                      <input onChange={(e)=>setUser(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500" placeholder="Enter your @ email" required=""/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input onChange={(e)=>setPass(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:border-blue-500" required=""/>
                  </div> 
                  <button onClick={handleSub} type="submit" className="bg-lightg w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border border-darkbrown">Confirm</button>
                
              </div>
              
          </div>
      </div>
  </div>
</section>

        </>
    );};
    
    
export default Login
