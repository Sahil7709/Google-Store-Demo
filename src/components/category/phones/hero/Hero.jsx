import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import Phones from '../../../../service/Phones';
import styles from "./Hero.module.css";

function Hero() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const heroData=Phones.heroData;

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
      }
    };

    const slider = sliderRef.current;
    slider?.addEventListener("scroll", handleScroll);

    return () => slider?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPrev = () => {
    sliderRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollToNext = () => {
    sliderRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <h4>{heroData[0]?.subtitle}</h4>
      <h1 className={styles.title}>{heroData[0]?.title}</h1>

      <div className={styles.sliderWrapper}>

        {canScrollLeft && (
          <button
            className={`${styles.arrow} ${styles.leftArrow}`}
            onClick={scrollToPrev}
            aria-label="Scroll Left"
          >
            <IoIosArrowDropleftCircle />
          </button>
        )}

        <div className={styles.slider} ref={sliderRef}>
          {heroData.slice(1).map((product, index) => (
            <div className={styles.card} key={index}>
              <img src={product.img} alt={product.name} />
              <Link to={product.link}>{product.name}</Link>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            className={`${styles.arrow} ${styles.rightArrow}`}
            onClick={scrollToNext}
            aria-label="Scroll Right"
          >
            <IoIosArrowDroprightCircle />
          </button>
        )}
      </div>
    </div>
  );
}

export default Hero;
