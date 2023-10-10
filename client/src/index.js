//DO NOT REMOVE THIS OR ELSE IT WILL DELETE ALL THE CSS!!!!!
//Made original css folder so doesnt matter
import "./tailwind.css";

import ReactDOM from "react-dom/client";
//Create the root with ReactDom.createRoot!
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("body"));

//Then call .render on the root w/ app inside of it to start your project
root.render(<App />);
