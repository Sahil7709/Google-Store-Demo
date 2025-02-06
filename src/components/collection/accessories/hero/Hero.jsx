import React from "react";
import styles from "./Hero.module.css"; 
import Accessories from "../../../../service/Accessories";

function Hero() {
    const heroData=Accessories.heroData;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Accessories</h1>
      <div className={styles.accessoriesGrid}>
        {heroData.map((item) => (
          <div key={item.id} className={styles.accessoryCard}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.accessoryImage}
            />
            <h3 className={styles.accessoryName}>{item.name}</h3>
            <p className={styles.accessoryPrice}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
