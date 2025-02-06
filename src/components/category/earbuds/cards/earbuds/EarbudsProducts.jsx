import React from 'react';
import Styles from './EarbudsProducts.module.css';
import Earbuds from '../../../../../service/Earbuds';

function EarbudsProducts() {
  const earbudsData = Earbuds.earbudsData[0];

  return (
    <div className={Styles.Container}>

      <div className={Styles.FirstContainer}>

        <section className={Styles.first}>

          <h2>{earbudsData.firstSection.name}</h2>
          <p>{earbudsData.firstSection.description}</p>
          <button className={Styles.learnMore}>
            {earbudsData.firstSection.buttonText}
          </button>
          <img src={earbudsData.firstSection.img} alt={earbudsData.firstSection.name} />
        </section>

        <section className={Styles.second}>

          <h2>{earbudsData.secondSection.name}</h2>
          <p>{earbudsData.secondSection.description}</p>
          <button className={Styles.learnMore}>
            {earbudsData.secondSection.buttonText}
          </button>
          <img src={earbudsData.secondSection.img} alt={earbudsData.secondSection.name} />
        </section>
      </div>
    </div>
  );
}

export default EarbudsProducts;
