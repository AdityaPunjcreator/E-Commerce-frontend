function Slider() {
  return (
    <div>
      {/* <!-- used the container fluid className to store the item  --> */}
      <div className="container-fluid mb-4">
        <h5 className="display-5 text-center fw-normal">Featured Products</h5>
        {/* <!-- adding a row className and margin on y-axis fo 1rem  --> */}
        <div className="row my-3">
          {/* <!-- creating a carousel with the carousel className  --> */}
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            {/* <!-- creating an indicator for the carousel  --> */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="0"
                className="active bg-dark"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="bg-dark"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="bg-dark"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <!-- created a row to add cards sliders --> */}
                <div className="row">
                  {/* <!-- using the  breakpoints to get the desired appearance  --> */}
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    {/* <!-- adding the customer "card-slider" className in order to create the trasnfrome effect  -->
                    <!-- creating card using card className  --> */}
                    <div className="card card-slider">
                      <img
                        src="https://images.bestsellerclothing.in/data/vero-moda/4-jan-2023/262812801_g1.jpg?width=397&height=526&mode=fill&fill=blur&format=auto&dpr=1.2"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Red dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/61WlIoOF0EL._UL1500_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Black Pants</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://www.globalrepublic.in/cdn/shop/products/1_dfdf13c7-64b9-4196-b6dd-7d0e31160385_800x.jpg?v=1635431593"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Blue Jeans</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/71f6EMDozfL._UL1500_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">plaid skirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- creating another carousel item  --> */}
              <div className="carousel-item">
                {/* <!-- again used the row className inside of which added cards giving them equal column by using "col" className --> */}
                <div className="row">
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/81EpHrUZU4L._UL1500_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Shirts</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/51IKzfWZg3L._UL1500_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Men pant</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/41vABBIr6ZL._UX679_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hoodies</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/61R11o1DC+S._UL1500_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Men Lower</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/51QitgKHDFL._UL1313_.jpg "
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Boy's T-Shirt And Shorts</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/719E0ykLdQL._UX679_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Girl Floral dress</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/71gt2Ez-45L._UY879_.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">T-shirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 my-md-0 my-3">
                    <div className="card card-slider">
                      <img
                        src="https://m.media-amazon.com/images/I/318DMDTJmeL.jpg"
                        alt=""
                        height="200px"
                        className="card-img-top"
                      />
                      <div className="card-body">
                        <h5 className="card-title">kids SweatShirt</h5>
                        <p className="card-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore, exercitationem!
                        </p>
                        <a href="#" className="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- adding controls "previous" and "next" to the slider  --> */}
            <a
              href="#carouselExample"
              data-bs-slide="prev"
              className="carousel-control-prev"
            >
              {/* <!-- using the font awesome icon  --> */}
              <span>
                <i className="fa-solid fa-arrow-left fa-2xl text-dark"></i>
              </span>
            </a>
            <a
              href="#carouselExample"
              data-bs-slide="next"
              className="carousel-control-next"
            >
              <span>
                <i className="fa-solid fa-arrow-right fa-2xl text-dark"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
