import React, { useState, useEffect } from "react";
import { auth } from "../../server/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
//All these are from line 2 as well so you can really say auth.GoogleAuthProvider
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import Signup from "./Signup.jsx";

const Login = () => {
  // Login Credentials
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Page and CSS conditional styling
  const [signUp, setSignUp] = useState(false);

  // Firebase error for displaying error
  const [firebaseError, setFirebaseError] = useState(false);

  //CurrentUser
  const [user, setUser] = useState({});

  // Firebase authentication function
  const loginAccount = () => {
    signInWithEmailAndPassword(auth, loginUser, loginPassword)
      .then((data) => {
        if (!data) {
          throw data;
        }
        //SEND TO NEXT PAGE?
        setFirebaseError(false);
      })
      .catch((err) => {
        setFirebaseError(true);
      });
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
    console.log(user);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("USERR", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
                  <label className="uppercase text-sm py-2">Username</label>
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
              <div>
                {firebaseError ? (
                  <div className="justify-center items-center flex text-xs my-3 text-red-600">
                    Invalid username or password. Please try again.
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  className="px-5 py-2 mt-7 bg-slate-500 rounded-lg hover:bg-gradient-to-r from-[#ffb115] to-[#f6dc30]"
                  onClick={() => {
                    loginAccount();
                  }}
                >
                  <h4 className="uppercase text-sm text-white">sign in</h4>
                </button>
              </div>
            </form>
          </div>
          <div>
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
            <div
              onClick={() => {
                googleSignIn();
              }}
            >
              <h1>GOOGLE</h1>
            </div>
            <div
              onClick={() => {
                logOut();
              }}
            >
              <h1>SIGNOUT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
