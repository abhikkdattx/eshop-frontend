import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Category = ({ data }) => {
  const { id, name, image } = data;

  return (
    <div className={styles.categoryCard}>
      <img src={image} alt={name} className={styles.categoryImage} />
      <div className={styles.categoryBody}>
        <h5 className={styles.categoryTitle}>{name}</h5>
        <h5 className={styles.categoryId}>ID: {id}</h5>
        <Link className={styles.categoryButton} to="/products">
          Select
        </Link>
      </div>
    </div>
  );
};

export default Category;
