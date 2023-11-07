import React from "react";
import { UserAuth } from "../src/context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user?.displayName}</h1>
      <button
        onClick={() => {
          handleSignOut();
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Account;
