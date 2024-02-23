import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "../constant";

const Signup = () => {
  // setting up state variables
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loaderIcon, setLoaderIcon] = useState(false); // declaring the state variable for loadericon to render it conditionally

  const Navigate = useNavigate();

  // the below function will be called when the registration form is submitted
  const handleregistration = async (event) => {
    try {
      event.preventDefault();
      setLoaderIcon(true);
      const requestbody = {
        fullname,
        email,
        password,
        confirmPassword,
      };
      const signUpresponse = await axios.post(
        `${API_BASE_URL}/user/signup`,
        requestbody
      );
      if (signUpresponse.status === 201) {
        setLoaderIcon(false);
        Swal.fire({
          icon: "success",
          title: signUpresponse.data.message,
        });
        setFullname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        Navigate("/login");
      }
    } catch (error) {
      setLoaderIcon(false);
      console.log(error);
      Swal.fire({
        icon: "error",
        title: error.response.data.error,
      });
      setFullname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };
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
            <h1 className="text-center">Register</h1>
            {/* rendering the LoaderIcon component conditionally using shortcircuiting */}
            {loaderIcon && <LoaderIcon />}
            <form onSubmit={handleregistration}>
              <div className="form-group mb-3">
                {/* <!-- creating a label with the help of label element  --> */}
                <label for="name">Name</label>
                {/* <!-- using the  required attribute  so that  the user is required to fill in the section- before submitting the form.  --> */}
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  value={fullname}
                  onChange={(event) => setFullname(event.target.value)}
                />
              </div>
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
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small>(password should be 8 characters atleast)</small>
              </div>
              <div className="form-group mb-3">
                <label for="password">ConfirmPassword:</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
              <div className="d-grid mb-3">
                {/* <!-- adding "onclick" event listener to call function check()  --> */}
                <button
                  type="submit"
                  className="btn btn-light btn-block button"
                >
                  signUp
                </button>
              </div>
            </form>

            <p className="fw-bold">
              Already a member?
              <span className="ms-2">
                <NavLink to="/login">Login</NavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
