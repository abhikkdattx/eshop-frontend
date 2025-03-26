import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiClient from "../../client/ApiClient";
import styles from "./styles.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await ApiClient.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={`container ${styles.productDetailContainer}`}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 d-flex justify-content-center">
          <div className={styles.imageWrapper}>
            <img
              src={product.images}
              alt={product.title}
              className={styles.productImage}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.detailsWrapper}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.category}>
              <span className={styles.badge}>{product.category?.name}</span>
            </p>
            <p className={styles.description}>{product.description}</p>
            <h3 className={styles.price}>
              <span>&#8377;</span> {product.price}
            </h3>
            <button className={styles.addToCartBtn}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
