import styles from "./Services.module.css";
import {
  FaSolarPanel,
  FaBolt,
  FaVideo,
  FaMicrochip,
  FaBoxOpen,
  FaTools,
} from "react-icons/fa";

const iconMap = {
  SolarPanel: FaSolarPanel,
  Bolt: FaBolt,
  Video: FaVideo,
  Microchip: FaMicrochip,
  BoxOpen: FaBoxOpen,
  Tools: FaTools,
};

const servicesRendered = [
  {
    title: "Solar Inverter Installation",
    description:
      "We install and configure high-efficiency inverters that convert solar energy into stable, usable power for your home or business, ensuring smooth performance and minimal downtime",
    icon: "SolarPanel",
  },
  {
    title: "Electrical Wiring",
    description:
      "Safe, professional wiring designed to handle solar systems and everyday electrical needs, ensuring reliable power distribution and long-term system safety.",
    icon: "Bolt",
  },
  {
    title: "CCTV Camera Installation",
    description:
      "Professional installation of surveillance systems that help you monitor, record, and protect your property with clear visuals and dependable coverage",
    icon: "Video",
  },
  {
    title: "Home Automation",
    description:
      "We install smart systems that let you control lighting, appliances, and energy usage from one place, improving comfort, security, and efficiency in your home.",
    icon: "Microchip",
  },
  {
    title: "Supply of Quality Materials",
    description:
      "We provide durable, certified electrical and solar components selected for performance, safety, and long-term reliability.",
    icon: "BoxOpen",
  },
  {
    title: "Electrical and Solar Maintenance",
    description:
      "Routine inspection and maintenance services that keep your electrical and solar systems running efficiently, safely, and without unexpected failures.",
    icon: "Tools",
  },
];

function Services() {
  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>Our Services At OLUPERFECT TECHNOLOGY</h2>
      <p className={styles.description}>
        We provide tailored solutions for every need
      </p>
      <div className={styles.grid}>
        {servicesRendered.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon }) {
  const Icon = iconMap[icon];
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon size={40} className={styles.icon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default Services;
