import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.modules.css";
import { useParams } from "react-router-dom";
import ApiClient from "../../client/ApiClient";

const ProductDetail = () => {
  const {id} = useParams();

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await ApiClient.get(
        `http://localhost:8080/api/products/${id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6">
          <div className="wrapper">
            <img src={product.images} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="wrapper">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              <span className="badge badge-secondary">
                {product.category?.name}
              </span>
            </p>
            <p>
              {product.description}
            </p>
            <h2>
              <span>&#8377;</span>
              {product.price}
            </h2>
            <a href="#" className="btn btn-dark">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default ProductDetail;
