import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const AboutList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.textSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.heading}>ABOUT US</h1>
            <h5 className={styles.subheading}>SUSTAINABILITY.</h5>
            <h2 className={styles.highlight}>Caring For our Planet.</h2>
            <p className={styles.description}>
              At <strong>Eshop</strong>, we are deeply committed to
              sustainability and the well-being of our planet. We believe that
              businesses have a crucial role to play in protecting the
              environment, and we take this responsibility seriously. Our
              approach to sustainability is rooted in reducing our carbon
              footprint, promoting ethical sourcing, and developing eco-friendly
              solutions that create a positive impact.
            </p>
            <p className={styles.description}>
              From utilizing renewable energy and minimizing waste to supporting
              reforestation and conservation initiatives, we strive to integrate
              green practices into every aspect of our operations. We carefully
              select sustainable materials, optimize our supply chain to reduce
              emissions, and continuously innovate to develop products that are
              both high-quality and environmentally responsible.
            </p>
            <p className={styles.description}>
              By choosing <strong>Eshop</strong>, you’re not just supporting a
              business—you’re joining a movement toward a greener, more
              sustainable future. Together, we can make a lasting difference for
              our planet and future generations.
            </p>
            <div className={styles.btnWrapper}>
              <Link to="/about/learn-more" className={styles.learnMoreBtn}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.wrapper}>
            <img
              src="/ecomlogo2.jpg"
              alt="Sustainability"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutList;
