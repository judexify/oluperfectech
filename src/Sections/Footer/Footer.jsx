import styles from "./Footer.module.css";
import logo from "../../assets/OLUPERFECT_LOGO.png";
import {
  FaHome,
  FaLightbulb,
  FaTools,
  FaTag,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img
            src={logo}
            alt="OluPerfect Technologies Logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Pages</h3>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                <FaHome size={14} /> Back To Top
              </a>
            </li>
            <li>
              <a href="#services" className={styles.link}>
                <FaLightbulb size={14} /> Our Solutions
              </a>
            </li>
            <li>
              <a href="#howitworks" className={styles.link}>
                <FaTools size={14} /> How It Works
              </a>
            </li>
            <li>
              <a href="#pricing" className={styles.link}>
                <FaTag size={14} /> Pricing
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Social</h3>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                <FaFacebook size={14} /> Facebook
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                <FaWhatsapp size={14} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <FaEnvelope size={14} /> OlusegunPhilip08@gmail.com
            </li>
            <li className={styles.contactItem}>
              <FaPhone size={14} /> +234 903 942 4681
            </li>
            <li className={styles.contactItem}>
              <FaMapMarkerAlt size={14} /> Lane 4, Brunelli Street
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © 2026 dev'ed by{" "}
          <a
            href="https://x.com/judexify"
            target="_blank"
            rel="noreferrer"
            className={styles.devLink}
          >
            JUDEXIFY
          </a>{" "}
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
