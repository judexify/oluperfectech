import { useEffect, useRef, useState } from "react";
import styles from "./HowItWorks.module.css";
import workImage from "../../assets/ontheroofworking.jpg";
import blurImage from "../../assets/Ontheroofworking-blur.jpg";

const serviceProcesses = {
  "Solar Inverter Installation": [
    "Consultation & Energy Assessment - We discuss your power needs, assess your current energy consumption, and recommend the right inverter capacity for your home or business.",
    "System Design & Planning - Our team designs the optimal inverter setup, determines placement, and plans the integration with your solar panels and electrical system.",
    "Professional Installation - We install the inverter, connect it to your solar array and electrical grid, and configure all settings for peak performance.",
    "Testing & Training - We thoroughly test the system, ensure everything runs smoothly, and teach you how to monitor and maintain your new solar inverter.",
  ],
  "Electrical Wiring": [
    "Consultation & Site Inspection - We evaluate your property, discuss your electrical needs, identify any safety concerns or upgrade requirements, and review existing infrastructure.",
    "Custom Wiring Plan - Our electricians create a detailed wiring diagram that meets safety codes, accommodates your current and future power demands, and optimizes energy distribution.",
    "Safe Installation - We install all wiring using quality materials, following strict safety standards, ensuring proper load distribution throughout your property, and maintaining code compliance.",
    "Testing & Certification - We test all circuits for safety and functionality, provide comprehensive documentation, ensure your system is fully compliant, and deliver certification for your records.",
  ],
  "CCTV Camera Installation": [
    "Consultation & Security Assessment - We discuss your security concerns, identify vulnerable areas, determine the best camera types and coverage zones for your property, and assess recording needs.",
    "System Design & Camera Placement - We create a surveillance plan showing optimal camera positions for maximum coverage, strategize recording and storage solutions, and plan network integration.",
    "Professional Installation - Our team mounts cameras securely, runs all necessary cables, sets up the recording system, configures remote viewing capabilities, and ensures optimal camera angles.",
    "System Configuration & Training - We calibrate cameras, test all feeds, set up mobile access, train you on how to view, record, and retrieve footage, and configure alert notifications.",
  ],
  "Home Automation": [
    "Consultation & Smart Home Planning - We explore your lifestyle needs, discuss which systems you want automated (lighting, security, climate, etc.), recommend compatible devices, and plan integration.",
    "Integration Design - We design a centralized control system that connects all your smart devices, ensures seamless communication between them, and creates efficient automation workflows.",
    "Device Installation & Setup - We install smart switches, sensors, hubs, and other devices, integrate them into one unified control platform, and configure network connectivity.",
    "Programming & User Training - We program automated routines, set up voice control or app access, teach you how to customize and control your smart home, and provide ongoing support.",
  ],
  "Supply of Quality Materials": [
    "Consultation & Requirements Analysis - We discuss your project needs, specifications, and budget to understand exactly what materials you require, and provide expert recommendations for your application.",
    "Product Selection & Sourcing - We recommend certified, high-quality components, source them from trusted manufacturers to ensure durability and performance, and verify all technical specifications.",
    "Quality Verification & Delivery - We inspect all materials for defects, verify certifications and compliance standards, arrange timely delivery to your location, and ensure proper handling throughout.",
    "Installation Support & Warranty - We provide technical guidance for installation, offer ongoing support throughout your project, ensure all materials are covered under manufacturer warranties, and assist with documentation.",
  ],
  "Electrical and Solar Maintenance": [
    "Consultation & System Review - We schedule a convenient time, discuss any issues you've noticed, review your system's maintenance history, and understand your performance expectations.",
    "Comprehensive Inspection - Our technicians thoroughly examine all components, test performance levels, check for wear or damage, identify potential problems, and assess overall system health.",
    "Maintenance & Repairs - We clean panels, tighten connections, replace worn parts, update settings, perform all necessary repairs to restore optimal function, and enhance system efficiency.",
    "Performance Report & Recommendations - We provide a detailed report of work completed, system health status, recommendations for future maintenance or upgrades, and schedule follow-up services.",
  ],
};

function HowItWorks() {
  const [option, setOption] = useState("Solar Inverter Installation");
  const [inView, setInView] = useState(false);

  const placeholderRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      }
    }, {});
    observer.observe(placeholderRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="howitworks" className={styles.howItWorks}>
      <div className={styles.leftSide}>
        <h2 className={styles.title}>HOW IT WORKS</h2>
        <p className={styles.subtitle}>
          From Picking a category to getting the work done....
        </p>
        <label className={styles.label}>
          Select one from the given options:
        </label>
        <select
          className={styles.select}
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {Object.keys(serviceProcesses).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        <div className={styles.displayedSelectedOption}>
          <ul className={styles.list}>
            {serviceProcesses[option].map((step, i) => (
              <li key={i} className={styles.listItem}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={placeholderRef} className={styles.rightSide}>
        <div className={styles.imageWrapper}>
          <img src={blurImage} alt="" className={styles.imagePlaceholder} />
          {inView && (
            <img
              src={workImage}
              alt="OluPerfectTeam Working on the roof"
              className={styles.imageMain}
              onLoad={(e) => e.target.classList.add(styles.imageLoaded)}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
