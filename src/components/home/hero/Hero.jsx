import React from 'react';
import Styles from './Hero.module.css';
import Home from '../../../service/Home';

function Hero() {
    // Access the first element in the heroData array
    const { title, description, buttonText, imageUrl, imageAlt } = Home.heroData[0] || {};

    return (
        <div className={Styles.Container}>
            <div className={Styles.Content}>
                <div className={Styles.Heading}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <button className={Styles.Button}>{buttonText}</button>
                </div>
            </div>
            <div className={Styles.ImageContainer}>
                <img src={imageUrl} alt={imageAlt} className={Styles.HeroImage} />
            </div>
        </div>
    );
}

export default Hero;
