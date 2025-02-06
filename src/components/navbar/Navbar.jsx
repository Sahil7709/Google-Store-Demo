import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import google from '../../assets/google.png'
import { IoMdCart } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import styles from './Navbar.module.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.Navbar}>

      <div className={styles.brand}>
        <Link to="/" aria-label="Home"><img src={google}/></Link>
      </div>

      <ul className={`${styles.links} ${isMobileMenuOpen ? styles.mobileMenu : ''}`}>
        <li><Link to="/phones">Phones</Link></li>
        <li><Link to="/earbuds">Earbuds</Link></li>
        <li><Link to="/watches_trackers">Watches & Trackers</Link></li>
        <li><Link to="/accessories_wall">Accessories</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>

      <div className={styles.utilityIcons}>
        <Link to="/search" aria-label="Search"><FaSearch size={20} /></Link>
        <Link to="/cart" aria-label="Cart"><IoMdCart size={20} /></Link>
        <Link to="/account" aria-label="Account"><MdAccountCircle size={24} /></Link>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
