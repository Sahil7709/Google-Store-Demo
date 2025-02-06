import React from 'react';
import Styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.FooterContainer}>
        <ul className={Styles.FooterLinks}>
          <li><a href="#" className={Styles.FooterLink}>Country availability</a></li>
          <li><a href="#" className={Styles.FooterLink}>Disability support</a></li>
          <li><a href="#" className={Styles.FooterLink}>Repairs</a></li>
          <li><a href="#" className={Styles.FooterLink}>Help Centre</a></li>
          <li><a href="#" className={Styles.FooterLink}>Contact us</a></li>
          <li><a href="#" className={Styles.FooterLink}>Fitbit Support</a></li>
          <li><a href="#" className={Styles.FooterLink}>Device recycling</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
