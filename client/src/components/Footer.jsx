import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <div
          className="container-fluid roboto-regular"
          style={{ padding: 0, margin: 0 }}
        >
          <footer
            className="text-center text-lg-start text-muted"
            style={{ backgroundColor: "#f0efef" }}
          >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="https://www.facebook.com/" className="me-4 text-reset">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.google.co.in/" className="me-4 text-reset">
                  <i className="fab fa-google"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://in.linkedin.com/" className="me-4 text-reset">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/login" className="me-4 text-reset">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      <i className="fas fa-gem me-3"></i>Trackify
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Smart Watches
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Track Fitness
                      </a>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Get a watch
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Login to dashboard
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        What Trakify does?
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Help
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i className="fas fa-home me-3"></i> Aundh, Pune - 411027,
                      India
                    </p>
                    <p>
                      <i className="fas fa-envelope me-3"></i>
                      contact@trakify.com
                    </p>
                    <p>
                      <i className="fas fa-phone me-3"></i> + 91 9453 2494 52
                    </p>
                    <p>
                      <i className="fas fa-print me-3"></i> + 91 9452 7568 94
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="text-center p-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
              © 2024 Copyright:
              <a className="text-reset fw-bold" href="/">
                Trakify.com
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
