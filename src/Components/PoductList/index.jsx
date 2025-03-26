import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import ApiClient from "../../client/ApiClient";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    ApiClient.get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">All Products</h2>
      <div className="row">
        {products.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

