import Slider from "./slider";

function Body() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {/* <!-- used the card className to create a card  --> */}
          <div className="card">
            <img
              src="https://img.freepik.com/free-photo/shopping-cart-with-wooden-elements_23-2148879396.jpg?w=1060&t=st=1693436425~exp=1693437025~hmac=e59c9a78caae852982e9d097c1c5f03d197e13598c21f8cd82c485d10a58cdc5"
              alt="e-commerce webpic"
              height="400px"
              width="100%"
              className="card-img"
            ></img>
            {/* <!-- used the "img-overlay" className to display the text over the image and aligned it center with the help of "text center" className --> */}
            <div className="card-img-overlay text-center mt-5">
              {/* <!-- added an id "font1" to apply the google font  --> */}
              <h1 className="card-title display-3" id="font1">
                Ecommerce
              </h1>
              {/* <!-- used the "lead" className to increase the diplay size  --> */}
              <p className="card-text lead">
                Clothes that talk on behalf of you. Something for every
                Occassion
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
}

export default Body;
