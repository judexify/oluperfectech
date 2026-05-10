import styles from "./Navigation.module.css";
import logo from "../../assets/OLUPERFECT_LOGO.png";
import { FaHome, FaQuestionCircle, FaTools } from "react-icons/fa";

function Navigation() {
  return (
    <div className={styles.headerItems}>
      <Logo />
      <NavigationLinks />
    </div>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="COMPANY'S LOGO" />
    </div>
  );
}

function NavigationLinks() {
  return (
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.navLink}>
          <a className={styles.link} href="#">
            <FaHome size={16} />
            <p className={styles.navText}>HOME</p>
          </a>
        </li>
        <li className={styles.navLink}>
          <a className={styles.link} href="#services">
            <FaTools size={16} />
            <p className={styles.navText}>SERVICES</p>
          </a>
        </li>
        <li className={styles.navLink}>
          <a className={styles.link} href="#faq">
            <FaQuestionCircle size={16} />
            <p className={styles.navText}>FAQs</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
