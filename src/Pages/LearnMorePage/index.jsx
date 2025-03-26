import React from "react";
import styles from "./styles.module.css";

const LearnMore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Our Commitment to Sustainability</h1>

        <p className={styles.description}>
          At <strong>Eshop</strong>, we believe that businesses have a
          responsibility to protect our planet. Our sustainability initiatives
          are designed to reduce our carbon footprint, promote ethical sourcing,
          and develop environmentally-friendly solutions.
        </p>

        <h2 className={styles.subheading}>Ethical Sourcing</h2>
        <p className={styles.description}>
          We work with suppliers who prioritize fair wages, ethical labor
          practices, and environmentally responsible production methods. Our
          products are carefully selected to meet these standards.
        </p>

        <h2 className={styles.subheading}>Waste Reduction</h2>
        <p className={styles.description}>
          We are committed to reducing waste through sustainable packaging,
          recycling programs, and innovative solutions that minimize our
          environmental impact.
        </p>

        <h2 className={styles.subheading}>Eco-Friendly Shipping</h2>
        <p className={styles.description}>
          Our shipping methods are optimized for lower emissions, and we offer
          carbon-neutral delivery options to reduce our environmental footprint.
        </p>

        <h2 className={styles.subheading}>Giving Back</h2>
        <p className={styles.description}>
          A portion of our profits goes toward reforestation, conservation
          projects, and clean energy initiatives. By choosing Eshop, you're
          supporting a greener future.
        </p>

        <div className={styles.btnWrapper}>
          <a href="/about" className={styles.backBtn}>
            Back to About
          </a>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
