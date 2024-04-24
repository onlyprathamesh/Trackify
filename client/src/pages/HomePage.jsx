import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />

      <div className="carousal my-3 roboto-regular">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./../../watch4 custom.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Fast Gen X Pro</h1>
                <h4>
                  real time health monitoring | tracking | fitness |
                  heart rate | sleep | calories | steps | distance |
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./../../watch12 (Custom).jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Fast Gen X Pro</h1>
                <h4>
                real time health monitoring | tracking | fitness |
                  heart rate | sleep | calories | steps | distance |
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./../../watch10 custom.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block text-black">
                <h1>Fast Gen X Pro</h1>
                <h4>
                real time health monitoring | tracking | fitness |
                  heart rate | sleep | calories | steps | distance |
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./../../watch7 custom.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Fast Gen X Pro</h1>
                <h4>
                real time health monitoring | tracking | fitness |
                  heart rate | sleep | calories | steps | distance |
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./../../watch9 custom.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1>Fast Gen X Pro</h1>
                <h4>
                  Some representative placeholder content for the third slide.
                </h4>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="bestseller" style={{ margin: "3% 4% 4% 4%" }}>
        <div className="container-fluid roboto-regular">
          <div className="contianer d-flex" style={{justifyContent:"space-between"}}>
          <p style={{ fontSize: "20px" }}>
            Explore <b>Bestsellers :</b>
          </p>
          <button className="btn btn-sm btn-dark" style={{height:"0%"}} onClick={() => navigate("/products")}>View All</button>
          </div>
          <div className="cards d-flex justify-content-between">
            <div className="card" style={{ width: "17rem" }}>
              <img
                src="./../../Lunar_call.webp"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body" style={{ paddingBottom: "0px" }}>
                <h5 className="card-title fw-bold">Wave Genesis</h5>
                <div className="d-flex">
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹2299
                  </p>
                  <p
                    className="card-text text-decoration-line-through text-muted"
                    style={{ paddingRight: "5px", fontSize: "13px" }}
                  >
                    ₹6499
                  </p>
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      color: "purple",
                      fontSize: "13px",
                    }}
                  >
                    65% Off
                  </p>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "17rem" }}>
              <img
                src="./../../Watch_Storm_Iron_Man_Marvel_Edition.webp"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body" style={{ paddingBottom: "0px" }}>
                <h5 className="card-title fw-bold"> Watch Storm Iron Man Marvel Edition </h5>
                <div className="d-flex">
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹3699
                  </p>
                  <p
                    className="card-text text-decoration-line-through text-muted"
                    style={{ paddingRight: "5px", fontSize: "13px" }}
                  >
                    ₹5699
                  </p>
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      color: "purple",
                      fontSize: "13px",
                    }}
                  >
                    65% Off
                  </p>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "17rem" }}>
              <img
                src="./../../Ultima_Prism.webp"
                className="card-img-top"
                alt="Product Image"
              />
              <div className="card-body" style={{ paddingBottom: "0px" }}>
                <h5 className="card-title fw-bold"> Ultima Prism</h5>
                <div className="d-flex">
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹2299
                  </p>
                  <p
                    className="card-text text-decoration-line-through text-muted"
                    style={{ paddingRight: "5px", fontSize: "13px" }}
                  >
                    ₹8999
                  </p>
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      color: "purple",
                      fontSize: "13px",
                    }}
                  >
                    65% Off
                  </p>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "17rem" }}>
              <img
                src="./../../fitbit_charge_6.png"
                className="card-img-top"
                alt="Product Image"
                style={{ backgroundColor: "orange", height: "75%" }}
              />
              <div className="card-body" style={{ paddingBottom: "0px" }}>
                <h5 className="card-title fw-bold">Fit Bit Charge 6</h5>
                <div className="d-flex">
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    ₹3599
                  </p>
                  <p
                    className="card-text text-decoration-line-through text-muted"
                    style={{ paddingRight: "5px", fontSize: "13px" }}
                  >
                    ₹5799
                  </p>
                  <p
                    className="card-text"
                    style={{
                      paddingRight: "5px",
                      color: "purple",
                      fontSize: "13px",
                    }}
                  >
                    65% Off
                  </p>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      right: "10px",
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About" style={{ backgroundColor: "#f0efef" }}>
        <div style={{ margin: "3% 4% 4% 4%" }}>
          <div className="container-fluid roboto-regular">
            <p style={{ fontSize: "20px" }}>
              About <b>Trackify :</b>
            </p>
            {/* <div className="about d-flex">
            <div className="about-content">
              <h4>Heart Rate, SPO2 monitoring & traking</h4>
            </div>
            <div className="about-image" style={{position:'absolute', right:'4%'}}>
              <img src="./../../test1.webp" alt="test1" style={{width:'28rem', borderRadius:'10px'}} />
            </div>
          </div> */}
            <div>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-12 col-xl-5 mx-auto">
                    <div className="lc-block mb-3 me-lg-5">
                      <div editable="rich">
                        <h1 className="fw-bolder">Hello World!</h1>
                        <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt ac augue suscipit rhoncus.
                          Donec ante erat, hendrerit sed eleifend et, dapibus at
                          leo. Mauris bibendum mi ut dui sagittis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 mx-auto col-xl-5 mb-4">
                    <div className="lc-block">
                      <img
                        className="img-fluid"
                        src="./../../test1.webp"
                        srcset=""
                        sizes=""
                        width=""
                        height=""
                        alt="Photo by Alessandro Di Credico"
                        loading="lazy"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About" style={{ backgroundColor: "white" }}>
        <div style={{ margin: "3% 4% 4% 4%" }}>
          <div className="container-fluid roboto-regular">
            {/* <div className="about d-flex">
            <div className="about-content">
              <h4>Heart Rate, SPO2 monitoring & traking</h4>
            </div>
            <div className="about-image" style={{position:'absolute', right:'4%'}}>
              <img src="./../../test1.webp" alt="test1" style={{width:'28rem', borderRadius:'10px'}} />
            </div>
          </div> */}
            <div>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-10 mx-auto col-xl-5 mb-4">
                    <div className="lc-block">
                      <img
                        className="img-fluid"
                        src="./../../test1.webp"
                        srcset=""
                        sizes=""
                        width=""
                        height=""
                        alt="Photo by Alessandro Di Credico"
                        loading="lazy"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 mx-auto">
                    <div className="lc-block mb-3 me-lg-5">
                      <div editable="rich">
                        <h1 className="fw-bolder">Hello World!</h1>
                        <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt ac augue suscipit rhoncus.
                          Donec ante erat, hendrerit sed eleifend et, dapibus at
                          leo. Mauris bibendum mi ut dui sagittis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About" style={{ backgroundColor: "#f0efef" }}>
        <div style={{ margin: "3% 4% 4% 4%" }}>
          <div className="container-fluid roboto-regular">
            {/* <div className="about d-flex">
            <div className="about-content">
              <h4>Heart Rate, SPO2 monitoring & traking</h4>
            </div>
            <div className="about-image" style={{position:'absolute', right:'4%'}}>
              <img src="./../../test1.webp" alt="test1" style={{width:'28rem', borderRadius:'10px'}} />
            </div>
          </div> */}
            <div>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-12 col-xl-5 mx-auto">
                    <div className="lc-block mb-3 me-lg-5">
                      <div editable="rich">
                        <h1 className="fw-bolder">Hello World!</h1>
                        <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt ac augue suscipit rhoncus.
                          Donec ante erat, hendrerit sed eleifend et, dapibus at
                          leo. Mauris bibendum mi ut dui sagittis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 mx-auto col-xl-5 mb-4">
                    <div className="lc-block">
                      <img
                        className="img-fluid"
                        src="./../../test1.webp"
                        srcset=""
                        sizes=""
                        width=""
                        height=""
                        alt="Photo by Alessandro Di Credico"
                        loading="lazy"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="About" style={{ backgroundColor: "white" }}>
        <div style={{ margin: "3% 4% 4% 4%" }}>
          <div className="container-fluid roboto-regular">
            {/* <div className="about d-flex">
            <div className="about-content">
              <h4>Heart Rate, SPO2 monitoring & traking</h4>
            </div>
            <div className="about-image" style={{position:'absolute', right:'4%'}}>
              <img src="./../../test1.webp" alt="test1" style={{width:'28rem', borderRadius:'10px'}} />
            </div>
          </div> */}
            <div>
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-md-10 mx-auto col-xl-5 mb-4">
                    <div className="lc-block">
                      <img
                        className="img-fluid"
                        src="./../../test1.webp"
                        srcset=""
                        sizes=""
                        width=""
                        height=""
                        alt="Photo by Alessandro Di Credico"
                        loading="lazy"
                        style={{ borderRadius: "10px" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-xl-5 mx-auto">
                    <div className="lc-block mb-3 me-lg-5">
                      <div editable="rich">
                        <h1 className="fw-bolder">Hello World!</h1>
                        <p className="lead">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nullam tincidunt ac augue suscipit rhoncus.
                          Donec ante erat, hendrerit sed eleifend et, dapibus at
                          leo. Mauris bibendum mi ut dui sagittis volutpat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default HomePage;
