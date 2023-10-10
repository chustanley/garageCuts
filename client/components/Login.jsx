import React, { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [missingPassword, setMissingPassword] = useState(false);

  const checkCredentials = () => {
    console.log("CHECKING CREDENTIALS...");

    const username = document.getElementById("createUser");
    const firstPassword = document.getElementById("createPass1").value;
    const copyOfFirstPassword = document.getElementById("createPass2").value;

    //If user is already in database, warn user to create different username

    if (firstPassword.length === 0 || copyOfFirstPassword.length === 0) {
      setMissingPassword(true);
      return;
    }
    setMissingPassword(false);

    //If passwords dont match, warn user to check if passwords match
    if (firstPassword !== copyOfFirstPassword) {
      setWrongPassword(true);
      return;
    }
    setWrongPassword(false);

    setSignUp(false);
  };

  return signUp ? (
    <div className="w-full min-h-screen items-center flex">
      <div className="w-full h-full mx-auto flex justify-center items-center">
        {/* LOGIN BOX  */}
        <div className="shadow-xl shadow-gray-400 rounded-xl p-5 w-full h-[60%] bg-gray-200 max-w-[500px] m-5">
          <h1>Garage Cuts</h1>
          <div className="my-5 h-[80%] rounded-lg bg-slate-300 p-5 justify-center items-center">
            {/* name and email  find out what breaks it*/}
            <form className="sm:grid grid-cols-2 gap-4 py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">First Name</label>
                <input
                  id="name"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Last Name</label>
                <input
                  id="phonenumber"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  id="phonenumber"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  id="phonenumber"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                />
              </div>
            </form>

            {/* <div className="mt-1">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                id="createUser"
                className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
                type="text"
              />
            </div> */}

            <form className="w-full">
              <div className="mt-10">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Username</label>
                  <input
                    id="createUser"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Password</label>
                  <input
                    id="createPass1"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">
                    {" "}
                    re-enter Password
                  </label>
                  <input
                    id="createPass2"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <div>
                {missingPassword ? (
                  <div className="justify-center items-center flex text-xs my-3 text-red-600">
                    Please fill out all of the information
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div>
                {wrongPassword ? (
                  <div className="justify-center items-center flex text-xs my-3 text-red-600">
                    Please make sure both passwords match
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="flex justify-center">
                {/* type = button stops the refresh  */}
                <button
                  type="button"
                  className="px-5 py-2 mt-7 bg-slate-500 rounded-lg hover:bg-gradient-to-r from-[#ffb115] to-[#f6dc30] "
                >
                  <h4
                    className="uppercase text-sm text-white"
                    onClick={() => {
                      checkCredentials();
                    }}
                  >
                    sign up
                  </h4>
                </button>
              </div>
            </form>
          </div>
          <div>
            <h4 className="text-xs">
              Already have an account?{" "}
              <div
                className="text-blue-600 inline-block text-xs"
                onClick={() => {
                  setSignUp(false);
                }}
              >
                Sign in
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
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
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Password</label>
                  <input
                    id="password"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
              </div>
              <div className="justify-center items-center flex text-xs my-3 text-blue-600">
                Forgot your email or password?
              </div>
              <div className="flex justify-center">
                <button className="px-5 py-2 mt-7 bg-slate-500 rounded-lg hover:bg-gradient-to-r from-[#ffb115] to-[#f6dc30] ">
                  <h4 className="uppercase text-sm text-white">sign in</h4>
                </button>
              </div>
            </form>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
