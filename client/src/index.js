//DO NOT REMOVE THIS OR ELSE IT WILL DELETE ALL THE CSS!!!!!
//Made original css folder so doesnt matter
import "./tailwind.css";

import ReactDOM from "react-dom/client";

//Create the root with ReactDom.createRoot!
import App from "./App";

//Mandatory in root to create react router dom.
import { BrowserRouter } from "react-router-dom";

//How to create a store - container that holds the state
import { configureStore } from "@reduxjs/toolkit";

//To provide the states to all over project - Everything inside of provider will have access to the state that is passed into it
import { Provider } from "react-redux";

//Importing reducers
//Understand that export default in user.js allows you to export this as ANY name.
import accountReducer from "./store/account";

//Pass in a collection of reducers THAT will be used in project
const store = configureStore({
  //What is a reducer, takes in status of current state and an 'action' that you want to perform on that state, and returns the result of that action on state
  reducer: {
    account: accountReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("body"));

//Then call .render on the root w/ app inside of it to start your project
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

/*
This is how you import redux to the root of the project
Here, we also imported react dom so that we can route and re-route
Every child of provider now has access into the store / state
*/
