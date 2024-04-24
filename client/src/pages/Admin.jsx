import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            id: e.target.value
        });
    }
    
    const handleNameChange = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            name: e.target.value
        });
    }
    
    const handleOriginalPriceChange = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            original_price: e.target.value
        });
    }
    
    const handleDiscountedPriceChange = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            discounted_price: e.target.value
        });
    }
    
    const handleUrlChalge = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            url: e.target.value
        });
    }
    const jsonData = JSON.stringify(selectedProduct);
    console.log(jsonData)
    
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
  
    const handleUpdate = (productId, productName, originalPrice, discountedPrice, url) => {
      setSelectedProduct({
        id: productId,
        name: productName,
        original_price: originalPrice,
        discounted_price: discountedPrice,
        url: url
      });
    };

    const updateProduct = async () => {
        try {
            const response = await fetch(`http://localhost:5000/update-product/${selectedProduct.id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body:jsonData,
            });
            if (response.ok) {
              console.log("Product updated successfully");
              fetchData(); // Fetch products again to reflect changes
            } else {
              console.log("Error updating product");
            }
          } catch (error) {
            console.log(error);
          }
    }

    const deleteProduct = async () => {
        try {
          const response = await fetch(`http://localhost:5000/delete-product/${selectedProduct.id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            console.log("Product deleted successfully");
            fetchData(); // Fetch products again to reflect changes
          } else {
            console.log("Error deleting product");
          }
        } catch (error) {
          console.log(error);
        }
      };
  
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="container-fluid">
            <div className="row row-cols-4 py-3" style={{ marginLeft: "5%" }}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="col card px-0 mx-4 my-3"
                  style={{ width: "17rem" }}
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
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() =>
                          handleUpdate(
                            product.id,
                            product.name,
                            product.original_price,
                            product.discounted_price,
                            product.url
                          )
                        }
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Modal */}
        {selectedProduct && (
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Update Product: {selectedProduct.name}
                  </h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <label>Id:</label>
                  <input type="text" className="form-control mb-3" value={selectedProduct.id} onChange={handleIdChange} readOnly/>
                    <label>Name:</label>
                  <input type="text" className="form-control mb-3" value={selectedProduct.name} onChange={handleNameChange} />
                    <label>Current Price:</label>
                  <input type="text" className="form-control mb-3" value={selectedProduct.original_price} onChange={handleOriginalPriceChange} />
                    <label>Original Price:</label>
                  <input type="text" className="form-control mb-3" value={selectedProduct.discounted_price} onChange={handleDiscountedPriceChange} />
                    <label>Image Link:</label>
                  <input type="text" className="form-control mb-3" value={selectedProduct.url} onChange={handleUrlChalge} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-dark btn-sm" data-bs-dismiss="modal" onClick={deleteProduct}>Delete</button>
                  <button type="button" className="btn btn-dark btn-sm" data-bs-dismiss="modal" onClick={updateProduct}>Update</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default Admin;
  