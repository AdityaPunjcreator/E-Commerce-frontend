import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const userId = useSelector((state) => state.userReducer.user._id); // using the useSelector hook to get the userId from redux store

  if (userId) {
    return (
      <div>
        <nav className="nav justify-content-center">
          <NavLink className="nav-link " to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link " to="/products">
            Products
          </NavLink>
          <NavLink className="nav-link " to="/contact">
            contact
          </NavLink>
        </nav>
      </div>
    );
  }
  return null;
}

export default Header;
