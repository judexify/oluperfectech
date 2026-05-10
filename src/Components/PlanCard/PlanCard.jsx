import styles from "./PlanCard.module.css";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaBatteryFull,
  FaSun,
  FaTools,
} from "react-icons/fa";
const WHATSAPP_NUM = import.meta.env.VITE_WHATSAPP_NUMBER;

const iconMap = {
  battery: FaBatteryFull,
  solar: FaSun,
  panel: FaBolt,
  charge: FaTools,
};

function PlanCard({
  name,
  badge,
  kva,
  system,
  includes,
  warranty,
  powers,
  price,
  priceLabel,
  popular,
  enterprise,
}) {
  const sendToWhatsapp = function (badge) {
    return `https://wa.me/${WHATSAPP_NUM}?text=Hey%20I%20am%20from%20your%20website%2C%20I%20want%20to%20know%20about%20the%20${badge}%20plan`;
  };

  return (
    <div
      className={`${styles.card} ${popular ? styles.popular : ""} ${enterprise ? styles.enterprise : ""}`}
    >
      {popular && <span className={styles.popularBadge}>MOST POPULAR</span>}

      <div className={styles.cardHeader}>
        <h3 className={styles.planName}>{name}</h3>
        <span className={styles.badge}>{badge}</span>
      </div>

      <div className={styles.kvaBox}>
        <p className={styles.kva}>{kva}</p>
        <p className={styles.system}>{system}</p>
      </div>

      <div className={styles.includes}>
        <p className={styles.sectionLabel}>SYSTEM INCLUDES:</p>
        <ul className={styles.includesList}>
          {includes.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <li key={i} className={styles.includesItem}>
                <Icon size={16} />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>

      {warranty && (
        <div className={styles.warranty}>
          <FaShieldAlt size={16} />
          {warranty}
        </div>
      )}

      <div className={styles.powers}>
        <p className={styles.sectionLabel}>POWERS:</p>
        <ul className={styles.powersList}>
          {powers.map((power, i) => (
            <li key={i} className={styles.powersItem}>
              <FaCheckCircle size={16} className={styles.checkIcon} />
              {power}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>{price}</p>
        <p className={styles.priceLabel}>{priceLabel}</p>
        <a href={sendToWhatsapp(badge)} target="_blank" className={styles.btn}>
          Get Quote
        </a>
      </div>
    </div>
  );
}

export default PlanCard;
