import React from "react"; // importing the React module
import ReactDOM from "react-dom/client"; // importing the React DOM module
import "bootstrap/dist/css/bootstrap.min.css"; // importing the Bootstrap file
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // importing the Bootstrap jquery file
import "./index.css"; // importing the css file
import App from "./App"; // importing the root component
import store from "./Redux/store"; // importing the centralized store
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // passing store as prop , so that the state in the Redux is available to "App" componet, and once it is available in App componet, all the components can use it from here when needed
  <Provider store={store}>
    <App />
  </Provider>
); // rendering the root component
