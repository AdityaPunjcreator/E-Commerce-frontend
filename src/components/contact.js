function Contact() {
  return (
    <div className="container-fluid">
      {/* <!-- aligning the text in the center using "text-center" className  --> */}
      <h1 className="text-center">Contact Us</h1>
      <div className="row">
        {/* <!-- adding an "offset" className and giving it one column gap   --> */}
        <div className="col-sm-3 offset-sm-1 my-3">
          <img
            src="https://img.freepik.com/free-photo/shopping-cart-with-wooden-elements_23-2148879396.jpg?w=1060&t=st=1693436425~exp=1693437025~hmac=e59c9a78caae852982e9d097c1c5f03d197e13598c21f8cd82c485d10a58cdc5"
            alt="image-e-com"
            height="100%"
            width="100%"
          ></img>
        </div>
        <div className="col-sm-6 my-3 offset-sm-1">
          {/* <!-- creating a form using form tag --> */}

          <form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your Name here"
              ></input>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your Email here"
              ></input>
            </div>

            <label for="exampleInputPassword2" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Enter your message here"
            ></textarea>
            {/* <!-- using className "d-grid" to display the button as block  --> */}
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-light btn-block button mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
