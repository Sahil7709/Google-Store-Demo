import React from 'react';
import Styles from './WatchesProducts.module.css';
import Watches from "../../../../../service/Watches";

function WatchesPruducts() {
  const watchesData = Watches.watchesData[0];

  return (
    <div className={Styles.Container}>

      <div className={Styles.FirstContainer}>
        <div>
          <h2>{watchesData.firstSection.name}</h2>
          <p>{watchesData.firstSection.description}</p>
          <button className={Styles.learnMore}>
            {watchesData.firstSection.buttonText}
          </button>
        </div>
        <img src={watchesData.firstSection.img} alt={watchesData.firstSection.name} />
      </div>

      <div className={Styles.SecondContainer}>
        <div>
          <h2>{watchesData.secondSection.name}</h2>
          <p>{watchesData.secondSection.description}</p>
          <button className={Styles.learnMore}>
            {watchesData.secondSection.buttonText}
          </button>
        </div>
        <img src={watchesData.secondSection.img} alt={watchesData.secondSection.name} />
      </div>

      <div className={Styles.ThirdContainer}>
        <div>
          <h2>{watchesData.thirdSection.name}</h2>
          <p>{watchesData.thirdSection.description}</p>
          <button className={Styles.learnMore}>
            {watchesData.thirdSection.buttonText}
          </button>
        </div>
        <img src={watchesData.thirdSection.img} alt={watchesData.thirdSection.name} />
      </div>

    </div>
  );
}

export default WatchesPruducts;
