import React from "react";
import Earbuds from "../../../../../service/Earbuds";
import styles from "./Look.module.css";

function Look() {
  const lookData = Earbuds.lookData;

  return (
    <div className={styles.container}>

      <h1 className={styles.heading}>{lookData[0]?.heading}</h1>

      <div className={styles.flexWrapper}>

        {lookData.slice(1).map((section, index) => (

          <div className={styles.card} key={index}>

            <h2 className={styles.title}>{section.title}</h2>

            <p className={styles.description}>{section.description}</p>

          </div>

        ))}

      </div>

    </div>

  );
  
}

export default Look;
