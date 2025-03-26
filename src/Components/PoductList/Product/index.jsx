import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Product = (props) => {
  const { id, title, price, category, images } = props.data;

  return (
    <div className={styles.productCard}>
      <div className={styles.card}>
        <img src={images} alt={title} className={styles.cardImage} />
        <div className={styles.cardBody}>
          <h5 className={styles.cardTitle}>{title}</h5>
          <p className={styles.cardCategory}>
            <span>{category?.name}</span>
          </p>
          <h2 className={styles.cardPrice}>
            <span>&#8377;</span>
            {price}
          </h2>
          <Link to={`/products/detail/${id}`} className={styles.cardButton}>
            Get Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
