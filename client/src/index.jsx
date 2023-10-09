import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
//Create the root with ReactDom.createRoot!
const root = ReactDOM.createRoot(document.getElementById("body"));

const axios = require("axios");

const App = () => {
  return <div>hi</div>;
};

//Then call .render on the root w/ app inside of it to start your project
root.render(<App />);
