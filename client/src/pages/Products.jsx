import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setProducts(result); // Update the products state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div class="container-fluid">
          <div className="row row-cols-4 py-3" style={{marginLeft:'5%'}}>
            {products.map((product) => (
              <div
                key={product.id}
                className="col card px-0 mx-4 my-3"
                style={{ width: "17rem"}}
              >
                <img
                  src={product.url}
                  className="card-img-top"
                  alt="Product Image"
                  style={{ backgroundColor: "orange", height: "75%" }}
                />
                <div className="card-body" style={{ paddingBottom: "0px" }}>
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <div className="d-flex">
                    <p
                      className="card-text"
                      style={{
                        paddingRight: "5px",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      ₹{product.original_price}
                    </p>
                    <p
                      className="card-text text-decoration-line-through text-muted"
                      style={{ paddingRight: "5px", fontSize: "13px" }}
                    >
                      ₹{product.discounted_price}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        paddingRight: "5px",
                        color: "purple",
                        fontSize: "13px",
                      }}
                    >
                      {Math.round(
                        ((product.discounted_price - product.original_price) /
                          product.discounted_price) *
                          100
                      )}
                      % Off
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
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
