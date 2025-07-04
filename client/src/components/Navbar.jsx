import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const login = false;
  const handleAboutScroll = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <>
      <nav
        class="navbar navbar-expand-lg border-bottom border-body roboto-medium"
        data-bs-theme="light"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Trackify
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a href="http://127.0.0.1:8020/" className="nav-link">
  Dashboard
</a>

              <Link class="nav-link" to="/products">
                Shop
              </Link>
              <Link class="nav-link" to="/" onClick={handleAboutScroll}>
                About
              </Link>
              <Link class="nav-link" to="/contact-us">
                Contact
              </Link>
            </div>

            <div class="dropdown mx-5 d-flex ms-auto">
              <button
                class="btn btn-light btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hello, {login === true ? name : "user"}
              </button>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/login">
                    Log/Sign In
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Manage Account
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
