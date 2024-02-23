import React, { useState } from "react";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const DecreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <>
      {/* <!-- taking a container className and adding margin on y axis of 0.5 rem  --> */}
      <div className="container my-2">
        {/* <!-- taking a row clas and adding margin bottom of 1 rem  --> */}
        <div className="row mb-3">
          {/* <!-- taking a col className and adding a border  --> */}
          <div className="col-md-6 border border-light-subtle">
            <div className="row">
              <div className="bg-light">
                <h2 className="text-center">Items in cart</h2>
              </div>
              {/* <!-- used this element to add a horizontal row to create a division  --> */}
              <hr className="hr" />
              <div className="col mb-3">
                <img
                  src="https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Red dress"
                  height="200rem"
                  width="200rem"
                />
              </div>

              <div className="col text-center">
                <h3>Red dress</h3>
                <p>$15</p>
                {/* <!-- adding an icon with the help fo font awesome  --> */}
                <button className="btn btn-sm button">
                  <i className="fa-sharp fa-solid fa-trash-arrow-up"></i>
                </button>
              </div>
              {/* <!-- adding "d-flex" className and aligning the item from the top  --> */}
              <div className="col d-flex align-items-start">
                {/* <!-- used the "onclick" event to call "increament function " --> */}
                <button
                  className="btn btn-md button me-2"
                  onClick={() => IncreaseQuantity()}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                <form>
                  {/* <!-- used the "oninput" event to call the funtion "none"  --> */}
                  <input
                    type="text"
                    className="form-control"
                    id="form"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                  />
                </form>
                {/* <!-- used the "onclick" event to call "decreament  function " --> */}
                <button
                  className="btn btn-md button ms-2"
                  onClick={() => DecreaseQuantity()}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- created another column, gave it breakpoints on margins and widths  --> */}
          <div className="col-md-3 m-md-5 mt-4 border border-light-subtle">
            <div className="row text-center">
              <div className="col bg-light">
                <h2 className="text-center">Summary</h2>
              </div>

              <hr className="hr" />
              <div className="col">
                <p>Cost</p>
                <p>Shipping</p>
              </div>
              <div className="col">
                <p>$15</p>
                <p>$5</p>
              </div>
            </div>
            <hr />
            <div className="row text-center">
              <div className="col">
                <p className="fw-bold fs-5">Total</p>
              </div>
              <div className="col">
                <p className="fw-bold fs-5">$20</p>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <input
                  type="button"
                  className="btn btn-light button"
                  value="checkout"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
