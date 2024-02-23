import React from "react";
import { NavLink } from "react-router-dom"; // importing NavLink from react-router-dom library to implement navigation
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux"; // importing useSelector and useDispatch hook  from react redux library
import { useNavigate } from "react-router-dom";
import { loginFailure } from "../Redux/Action/userAction"; // importing loginFailure which i have defined in userAction.js file in Redux folder

function Navbar() {
  const userId = useSelector((state) => state.userReducer.user._id); // using the useSelector hook to get the userId from redux store
  const Dispatch = useDispatch(); // to trigger the action
  const Navigate = useNavigate(); // to navigate to the desired page

  const handleLogout = () => {
    try {
      // removing the token and the user form the local storage of the browser
      localStorage.removeItem("token");
      localStorage.removeItem("existingUser");
      Dispatch(loginFailure()); // triggering the action of loginFailure and updating to the initial state
      Navigate("/login"); // navigating to the login page once the user is logged out
      // using the sweetalert library to alert the user that he has logged out
      Swal.fire({
        icon: "success",
        title: "user successfully logged out",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col">
          {/* <!-- creating a navbar with the help of "navbar" className and creating a dark theme  -->
            <!-- using the "navbar-expand-md className" so that until the screen size is
          768px, the "nav-item" will align itself horizontally --> */}
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="navbar-brand">
              <span id="font" className="fs-2">
                Ecommerce
              </span>
            </div>
            {/* <!-- creating  a toggle button  --> */}
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbar"
            >
              {/* <!-- used the "navbar-toggler-icon" to give icon  --> */}
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!-- creating a collapse element  --> */}
            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  {/* <!-- creating a form with the help of "form" element  and adding a className "d-flex" to it inroder to align the form item horizontally --> */}
                  {userId && (
                    <form className="d-flex" role="search">
                      {/* <!-- adding a custom className "frm-ui" to customize the appearance  --> */}
                      <input
                        className="form-control frm-ui"
                        type="search"
                        placeholder="Product name, Category name, etc..."
                        aria-label="Search"
                      />
                      <button className="btn btn-light bt-ui" type="submit">
                        Search
                      </button>
                    </form>
                  )}
                </li>
              </ul>
              <ul className="navbar-nav me-5 mt-2 mt-md-0">
                {userId ? (
                  ""
                ) : (
                  <li className="nav-item">
                    <NavLink to="/login" className="btn btn-light button">
                      Login
                    </NavLink>
                  </li>
                )}
                {userId && (
                  <>
                    <li className="nav-item">
                      <NavLink
                        to="/login"
                        className="btn btn-light button"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/cart" className="nav-link">
                        {/* <!-- creating a cart icon with the help of fontawesome icon --> */}
                        <i className="fa-solid fa-cart-shopping fa-2xl font"></i>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
