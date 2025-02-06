import React from 'react';
import Styles from './Gemini.module.css';
import Phones from '../../../../../service/Phones';

function Gemini() {
  const geminiData = Phones.geminiData[0];

  return (
    <div className={Styles.Container}>

      <div className={Styles.FirstContainer}>
        <div>
          <h2>{geminiData.firstSection.name}</h2>
          <p>{geminiData.firstSection.description}</p>
          <button className={Styles.learnMore}>
            {geminiData.firstSection.buttonText}
          </button>
        </div>
        <img src={geminiData.firstSection.img} alt={geminiData.firstSection.name} />
      </div>

      <div className={Styles.SecondContainer}>
        <div>
          <h2>{geminiData.secondSection.name}</h2>
          <p>{geminiData.secondSection.description}</p>
          <button className={Styles.learnMore}>
            {geminiData.secondSection.buttonText}
          </button>
        </div>
        <img src={geminiData.secondSection.img} alt={geminiData.secondSection.name} />
      </div>

      <div className={Styles.ThirdContainer}>
        <section className={Styles.first}>
          <h2>{geminiData.thirdSection.name}</h2>
          <p>{geminiData.thirdSection.description}</p>
          <button className={Styles.learnMore}>
            {geminiData.thirdSection.buttonText}
          </button>
          <img src={geminiData.thirdSection.img} alt={geminiData.thirdSection.name} />
        </section>

        <section className={Styles.second}>
          <h2>{geminiData.fourthSection.name}</h2>
          <p>{geminiData.fourthSection.description}</p>
          <button className={Styles.learnMore}>
            {geminiData.fourthSection.buttonText}
          </button>
          <img src={geminiData.fourthSection.img} alt={geminiData.fourthSection.name} />
        </section>
      </div>
    </div>
  );
}

export default Gemini;
