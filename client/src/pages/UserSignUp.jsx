import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";

function UserSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post('/register', { email, password });
      alert('Registration successful! Please log in.');
      setEmail('');
      setPassword('');
    } catch (error) {
      alert('Registration failed. Please check your input.');
    }
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
                    <h2 className="fw-bold text-uppercase">Sign Up</h2>
                    <p className="text-white-50">
                      Please enter your email and password!
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-light btn-lg px-5 mt-4"
                      type="button"
                      onClick={handleRegister}
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p className="mb-0 mt-3">
                      Already have an account?{" "}
                      <Link to="/login" className="text-white-50 fw-bold">
                        Sign In
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
  )
}

export default UserSignUp
