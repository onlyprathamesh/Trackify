import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function UserLogin() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  
  const handleEmailChange = (e) => {
    setUserData({
      ...userData,
      email: e.target.value
    });
  };
  
  // To update password
  const handlePasswordChange = (e) => {
    setUserData({
      ...userData,
      password: e.target.value
    });
  };
  
  // To convert userData to JSON string
  const jsonData = JSON.stringify(userData);
  console.log(jsonData)

  const handleLogin = async () => {
      try{
        const response = await fetch(
          "http://localhost:5000/login",
          {
            method: "POST",
            headers: {
              "Content-Type":"application/json",
            },
            body: jsonData,
          }
        )
        alert('Login successful!');
        localStorage.setItem('access_token', 'your_jwt_token');  // Replace with the actual JWT token
        navigate("/");
      } catch(error) {
        alert('Login failed. Please check your credentials.');
        console.log(error)
      }
    setUserData({ email:"", password:""})
  };
  return (
    <>
      <section className="gradient-custom mt-5 mb-3">
        <div className="container h-100">
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "75%" }}
          >
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div>
                    <h2 className="fw-bold text-uppercase">Login</h2>
                    <p className="text-white-50">
                      Please enter your login and password!
                    </p>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        value={userData.email}
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control form-control-lg"
                        value={userData.password}
                        onChange={handlePasswordChange}
                        />
                    </div>

                    <p className="small pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-light btn-lg px-5"
                      type="button"
                      onClick={handleLogin}
                      >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0 mt-3">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-white-50 fw-bold">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                  <div>
                    <p className="mb-0 mt-3">
                      <Link to="/" className="text-white-50 fw-bold">
                      Return to homepage
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", height:'27vh' }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="/">
          Trakify.com
        </a>
      </div>
    </>
  );
}

export default UserLogin;
