import React from "react";
import Login from "../components/Login.jsx";
import Home from "../components/Home.jsx";
import Account from "../components/Account.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Protected from "../components/Protected.jsx";

import { AuthContextProvider } from "./context/AuthContext.js";

/*
AuthContextProvider is a context that also acts like redux by providing all of its child access to its state

Routes is creating a bunch of route within your project, before this in our root we placed BrowserRouter there
for us to be able to use these react router dom.

We placed a Protected component that will return the child aka account if the user is present, and if not,
we return the home page. (check Protected File)

*/

const App = () => {
  return (
    <div className="min-w-[350px]">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
