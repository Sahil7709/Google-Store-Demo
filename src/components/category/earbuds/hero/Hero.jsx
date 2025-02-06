import React from "react";
import { Link } from "react-router-dom";
import Earbuds from "../../../../service/Earbuds";
import styles from "./Hero.module.css";

function Hero() {
  const heroData = Earbuds.heroData;

  return (
    <div className={styles.container}>
      <h4>{heroData[0]?.subtitle}</h4>
      <h1 className={styles.title}>{heroData[0]?.title}</h1>

      <div className={styles.flexWrapper}>
        {heroData.slice(1).map((product, index) => (
          <div className={styles.card} key={index}>
            <img src={product.img} alt={product.name} />
            <Link to={product.link}>{product.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
