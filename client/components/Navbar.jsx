import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../src/context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        <Link to="/">garageCuts</Link>
      </h1>

      {user === null ? (
        <Link to="/login">Sign In</Link>
      ) : (
        <div
          onClick={() => {
            handleSignOut();
          }}
        >
          Sign Out
        </div>
      )}
    </div>
  );
};

export default Navbar;
