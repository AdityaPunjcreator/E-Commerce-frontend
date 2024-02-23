import React, { useEffect } from "react";
import Header from "./components/header"; // importing the Header component
import Body from "./components/body"; // importing the Body component
import Footer from "./components/footer"; // importing the Footer component
import Navbar from "./components/navbar"; // importing the Navbar component
import Contact from "./components/contact"; // importing the Contact component
import Login from "./pages/login"; // importing the Login component"
import Signup from "./pages/signup"; // importing the Signup component
import Products from "./components/allProducts"; // importing the Products component
import Cart from "./components/cart"; // importing the Cart component
import "./App.css"; // importing the css file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // importing these components to enable navigation to components in the browser
import { useDispatch } from "react-redux"; // import useDispatch from  react-redux library
import { loginFailure, loginSuccess } from "./Redux/Action/userAction"; // import loginSuccess, loginFailure
import { useNavigate } from "react-router-dom"; // import useNavigate from react-router-dom library

function App() {
  // we want to maintain the same state of the user if the page is refreshed and also disable navigation from URL

  function Dynamicrouting() {
    const Dispatch = useDispatch(); // used  the dispatch to dispatch the data to the redux store to trigger the action
    const Navigate = useNavigate(); // used this to navigate to the desired page

    // the same state of the application should be maintained ,when the user refreshes the page,

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("existingUser")); // parsing the data to convert from string to object
      if (userData) {
        Dispatch(loginSuccess(userData)); // dispatching the login success action if user exists, that is asking the application not to change the state when the page refreshes
      } else {
        // the below code will run in case the user is not logged in
        localStorage.removeItem("token"); // removing the token from localStorage
        localStorage.removeItem("existingUser"); // removing the existing user from localStorage
        Dispatch(loginFailure()); // dispatching the login failure action
        Navigate("/login"); // navigating to login page in case user is not found
      }
    }, []); // Empty dependency array to run the effect only once

    return (
      // implementing the routers
      <>
        <Routes>
          {/* using the "exact" to match the exact route */}
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Body />} />
          {/* <Route exact path="/myprofile" element={<Profile />}></Route> */}
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        ;
      </>
    );
  }

  return (
    // implementing the routing thing, basically if the paths are exactly that the user will be redirected to that component
    <Router>
      {/* adding the div with this style , so that the container takes atleast the full height of viewport  */}
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Header />
        <Dynamicrouting />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
