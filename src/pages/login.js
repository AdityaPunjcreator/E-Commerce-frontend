import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // importing NavLink to enable navigation
import axios from "axios"; // importing axios to make http requests
import Swal from "sweetalert2"; // importing sweetalert library to show alert
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../constant"; // importing the base URL from constant js file
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/Action/userAction"; // importing the action from redux folder

const Login = () => {
  // setting up state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loaderIcon, setLoaderIcon] = useState(false); // declaring the state variable for loadericon to render it conditionally

  const Navigate = useNavigate();
  const Dispatch = useDispatch(); // used  the dispatch to dispatch the data to the redux store to trigger the action

  // this function will be called on the submission of the form
  const handleLogin = async (event) => {
    try {
      event.preventDefault(); // preventing the default behavior of the browser
      setLoaderIcon(true); // setting the loadericon  value to true  so that is starts to show
      const requestbody = {
        email,
        password,
      }; // sending this in the payload
      // posting the data to the server
      const loginData = await axios.post(
        `${API_BASE_URL}/user/login`,
        requestbody
      );
      // performing the below action if the status is successful
      if (loginData.status === 200) {
        setLoaderIcon(false);
        // firing the alert once the user is successfully logged in
        Swal.fire({
          icon: "success",
          title: loginData.data.message,
        });
        localStorage.setItem("token", loginData.data.token); // storing the token in  localStorage
        // storing the existing user in localStorage
        localStorage.setItem(
          "existingUser",
          JSON.stringify(loginData.data.existingUser)
        );
        Dispatch(loginSuccess(loginData.data.existingUser)); // dispatching loginsuccess action
        setEmail(""); // setting the email  state variable to empty string
        setPassword(""); // setting the password state variable to empty string
        Navigate("/home"); // navigating to the home page when login is successful
      }
    } catch (error) {
      setLoaderIcon(false);
      console.log(error);

      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
      setEmail("");
      setPassword("");
    }
  };
  // creating a loader icon component
  const LoaderIcon = () => {
    return (
      <>
        <div className="row">
          <div className="col text-center">
            <div
              className="spinner-border text-primary loader-icon"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h1 className="text-center">Login</h1>
            {/* rendering the LoaderIcon component conditionally using shortcircuiting */}
            {loaderIcon && <LoaderIcon />}
            <form onSubmit={handleLogin}>
              <div className="form-group mb-3">
                {/* <!-- creating a label with the help of label element  --> */}
                <label for="email">E-mail:</label>
                {/* <!-- using the  required attribute  so that  the user is required to fill in the section- before submitting the form.  --> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label for="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="d-grid mb-3">
                {/* <!-- adding "onclick" event listener to call function check()  --> */}
                <button
                  type="submit"
                  className="btn btn-light btn-block button"
                  onclick="check()"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="fw-bold">
              Not a member?
              <span className="ms-2">
                <NavLink to="/signup">Register here</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
