import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import Home from '../../../../service/Home';

import styles from './Discover.module.css';

function Discover() {
    const sliderRef = useRef(null);
    const [canScroll, setCanScroll] = useState({ left: false, right: true });

    const discover = Home.discover || [];

    const title = discover[0]?.title;
    const subscribeMessage = discover[discover.length - 1]?.subscribeMessage;
    const subscribeButtonText = discover[discover.length - 1]?.subscribeButtonText;

    useEffect(() => {
        const updateScrollState = () => {
            if (sliderRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                setCanScroll({
                    left: scrollLeft > 0,
                    right: scrollLeft + clientWidth < scrollWidth - 1,
                });
            }
        };

        const slider = sliderRef.current;
        slider?.addEventListener('scroll', updateScrollState);

        updateScrollState();

        return () => slider?.removeEventListener('scroll', updateScrollState);
    }, []);

    const scroll = (direction) => {
        const offset = 250; // Amount to scroll
        sliderRef.current?.scrollBy({ left: direction === 'left' ? -offset : offset, behavior: 'smooth' });
    };

    return (
        <div className={styles.container}>
            {/* Title Section */}
            {title && <h1 className={styles.Title}>{title}</h1>}

            {/* Slider Section */}
            <div className={styles.sliderWrapper}>
                {/* Left Arrow */}
                {canScroll.left && (
                    <button
                        className={`${styles.arrow} ${styles.leftArrow}`}
                        onClick={() => scroll('left')}
                        aria-label="Scroll Left"
                    >
                        <IoIosArrowDropleftCircle />
                    </button>
                )}

                <div className={styles.slider} ref={sliderRef}>
                    {discover.slice(1, -1).map((product, index) => (
                        <div className={styles.card} key={index}>
                            <img src={product.img} alt={product.name} className={styles.productImage} />
                            <Link to={product.link} className={styles.productLink}>
                                {product.name}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {canScroll.right && (
                    <button
                        className={`${styles.arrow} ${styles.rightArrow}`}
                        onClick={() => scroll('right')}
                        aria-label="Scroll Right"
                    >
                        <IoIosArrowDroprightCircle />
                    </button>
                )}
            </div>

            {subscribeMessage && subscribeButtonText && (
                <div className={styles.subscription}>
                    <div className={styles.subscribeContent}>
                        <MdOutlineCollectionsBookmark className={styles.subscribeIcon} />
                        <h2 className={styles.subscribeText}>{subscribeMessage}</h2>
                        <button className={styles.subscribeButton}>
                            {subscribeButtonText}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Discover;