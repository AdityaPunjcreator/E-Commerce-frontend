import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const userId = useSelector((state) => state.userReducer.user._id); // using the useSelector hook to get the userId from redux store

  return (
    // <!-- adding Linkcontainer-fluid className and applying dark background and giving it Linkpadding of 1rem  -->
    <div className="container-fluid bg-dark p-3 mt-auto">
      <div className="row">
        {/* <!-- adding Linkcol className and aligning the item at the starting position till the screen size is 768 px  --> */}

        <div className="col-md text-start-md text-center text-light">
          <ul className="list-unstyled">
            <p className="lead">
              <a>women</a>
            </p>
            <li>
              <Link to="#" className="text-decoration-none text-light">
                Dress
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-light">
                Pants
              </Link>
            </li>
            <li>
              <Link to="#" className="text-decoration-none text-light">
                Skirts
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md text-start-md text-center text-light">
          <ul className="list-unstyled">
            <p className="lead">
              <a>Men</a>
            </p>
            <li>
              <a
                to="./men-allProduct.html"
                className="text-decoration-none text-light"
              >
                Shirts
              </a>
            </li>
            <li>
              <a
                to="./men-allProduct.html"
                className="text-decoration-none text-light"
              >
                Pants
              </a>
            </li>
            <li>
              <a
                to="./men-allProduct.html"
                className="text-decoration-none text-light"
              >
                Hoodies
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md text-start-md text-center text-light">
          <ul className="list-unstyled">
            <p className="lead">
              <a>Kids</a>
            </p>
            <li>
              <a
                to="./kidsection.html"
                className="text-decoration-none text-light"
              >
                All items
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md text-start-md text-center text-light">
          <ul className="list-unstyled">
            <p className="lead">
              <a>links</a>
            </p>
            {userId && (
              <>
                <li>
                  <Link to="/home" className="text-decoration-none text-light">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-decoration-none text-light">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-decoration-none text-light"
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className="divide"></div>
      <div className="row">
        <div className="col">
          {/* <!-- applying text-center className to align it in center and "text-white" will make the color of the text white  --> */}
          <p className="my-2 text-center text-white">
            Copyright &copy; E-Commerce 2022-23
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
