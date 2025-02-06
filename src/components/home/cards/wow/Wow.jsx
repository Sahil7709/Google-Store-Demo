import React from 'react';
import Styles from './Wow.module.css';
import Home from '../../../../service/Home';

function Wow() {

  const wow = Home.wow || []; 

  return (
    <div className={Styles.Container}>

      <h1 className={Styles.Title}>{wow[0]?.title}</h1>

      <div className={Styles.Grid}>
        {wow.slice(1).map((item, index) => (  // Excluding the first item from the map
          <div key={index} className={Styles.GridItem}>
            <div className={Styles.Text}>
              <h2>{item.heading}</h2>
              <p>{item.description}</p>
              <button className={Styles.Button}>{item.buttonText}</button>
              <img src={item.imageSrc} alt={item.altText} className={Styles.Image} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Wow;
