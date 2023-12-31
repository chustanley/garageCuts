import React, { useState, useEffect } from "react";

//Importing the useContext FUNCTION so we can get the values accessible.
import { UserAuth } from "../src/context/AuthContext.js";

//How to access state within slice and also access function to address state
import { useSelector, useDispatch } from "react-redux";
import { login } from "../src/store/account.js";

//We use useNavigate to go through the dom but the 'routes' have to be assigned higher in the tree
//Routes are assigned in /src/app.js
import { useNavigate } from "react-router-dom";

import Signup from "./Signup.jsx";

const Login = () => {
  //HOW TO USE REDUX STATE MANAGEMENT LIBRARY
  const account = useSelector((state) => state.account.value);
  const dispatch = useDispatch();

  //HOW TO USE CONTEXT LIBRARY STATE MANAGEMENT
  //Call UserAuth to get access to its function and state in its 'component context'
  const { googleSignIn, loginAccount, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  //User is in the Context Library and is a global state, any change to it NOT being null will trigger
  //Navigation to account page
  useEffect(() => {
    if (user !== null) {
      console.log("USER?", user);
      navigate("/account");
    }
  }, [user]);

  // Login Credentials
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Page and CSS conditional styling
  const [signUp, setSignUp] = useState(false);

  return signUp ? (
    <Signup signUp={signUp} setSignUp={setSignUp} />
  ) : (
    <div className="w-full min-h-screen items-center flex">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        {/* LOGIN BOX  */}
        <div className="shadow-xl shadow-gray-400 rounded-xl p-5 w-full h-[60%] bg-gray-200 max-w-[500px] m-5">
          <h1>Garage Cuts</h1>
          <div className="my-5 h-[80%] rounded-lg bg-slate-300 p-5 justify-center items-center flex">
            <form className="w-full">
              <div className="mt-10">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    id="username"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    value={loginUser}
                    onChange={(e) => {
                      setLoginUser(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Password</label>
                  <input
                    id="password"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    value={loginPassword}
                    onChange={(e) => {
                      setLoginPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="justify-center items-center flex text-xs my-3 text-blue-600">
                Forgot your email or password?
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-5 py-2 mt-7 bg-slate-500 rounded-lg hover:bg-gradient-to-r from-[#ffb115] to-[#f6dc30]"
                  onClick={() => {
                    loginAccount(loginUser, loginPassword);
                  }}
                >
                  <h4 className="uppercase text-sm text-white">sign in</h4>
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-between">
            <div>
              <h4 className="text-xs">
                Don't have an account?{" "}
                <div
                  className="text-blue-600 inline-block text-xs"
                  onClick={() => {
                    setSignUp(true);
                  }}
                >
                  Sign up!
                </div>
              </h4>
            </div>
            <h1
              onClick={() => {
                handleGoogleSignIn();
              }}
            >
              google
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
