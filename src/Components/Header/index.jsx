import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <video autoPlay loop muted playsInline className={styles.headerVideo}>
        <source
          src="https://videos.pexels.com/video-files/3917742/3917742-uhd_2732_1440_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <h1 className="display-4 fw-bold text-light">Welcome to E-Shop!</h1>
        <p className="lead text-light">
          Your one-stop solution for all your shopping needs.
        </p>
        <Link className={styles.btnShop} to="/products">
          Start Shopping
        </Link>
      </div>
    </div>
  );
};

export default Header;
