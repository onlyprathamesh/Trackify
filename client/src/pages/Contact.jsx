import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
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
            Name
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            // value={userData.email}
            // onChange={handleEmailChange}
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
          <label className="form-label" for="typeEmailX">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            // value={userData.email}
            // onChange={handleEmailChange}
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
          <label className="form-label" for="typeEmailX">
            Phone
          </label>
          <input
            type="email"
            id="email"
            className="form-control form-control-lg"
            // value={userData.email}
            // onChange={handleEmailChange}
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
          <label className="form-label" for="textarea">
            Description
          </label>
          <input
            type="textarea"
            id="email"
            className="form-control form-control-lg"
            // value={userData.email}
            // onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex justify-content-center py-3">
          <button
            className="btn btn-primary"
            type="button"
            // onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
