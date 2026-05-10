import styles from "./Pricing.module.css";
import PlanCard from "../../Components/PlanCard/PlanCard";
import { useState } from "react";
import Form from "../../Components/Form/Form";

const plans = [
  {
    name: "Basic",
    badge: "STARTER",
    kva: "1 KVA",
    system: "12V SYSTEM",
    includes: [
      { icon: "battery", text: "12V/220Amps Battery" },
      { icon: "solar", text: "2pcs × 250W Solar Panels" },
      { icon: "charge", text: "50Amps Charge Controller" },
    ],
    warranty: null,
    powers: ["Lighting Points", "TV/Decoder", "DC Fan", "Charging Appliances"],
    price: "---",
    priceLabel: "CONTACT FOR QUOTE",
    popular: false,
    enterprise: false,
  },
  {
    name: "Standard",
    badge: "POPULAR",
    kva: "3 KVA",
    system: "24V HYBRID SYSTEM",
    includes: [
      { icon: "solar", text: "3KVA/24V Solar Inverter" },
      { icon: "battery", text: "5kWh/24V Lithium Battery" },
      { icon: "panel", text: "3pcs × 600W Canadian Solar" },
      { icon: "charge", text: "Installation Materials" },
    ],
    warranty: "5 Years Warranty - 10 Years Lifespan",
    powers: [
      "Fridge & Freezer",
      "Television",
      "Fans",
      "Pumping Machine",
      "Lighting Points",
      "Charging Appliances",
    ],
    price: "---",
    priceLabel: "INCLUDING DELIVERY & INSTALLATION",
    popular: false,
    enterprise: false,
  },
  {
    name: "Premium",
    badge: "BEST VALUE",
    kva: "4 KVA",
    system: "24V HYBRID SYSTEM",
    includes: [
      { icon: "solar", text: "4KVA/24V Solar Inverter" },
      { icon: "battery", text: "5kWh/24V Lithium Battery" },
      { icon: "panel", text: "7pcs × 600W Canadian Solar" },
      { icon: "charge", text: "Installation Materials" },
    ],
    warranty: "5 Years Warranty - 10 Years Lifespan",
    powers: [
      "Fridge & Freezer",
      "Television",
      "Fans",
      "Pumping Machine",
      "Lighting Points",
      "Charging Appliances",
    ],
    price: "---",
    priceLabel: "INCLUDING DELIVERY & INSTALLATION",
    popular: true,
    enterprise: false,
  },
  {
    name: "Enterprise",
    badge: "PREMIUM",
    kva: "5 KVA",
    system: "48V HYBRID SYSTEM",
    includes: [
      { icon: "solar", text: "5KVA/48V Solar Inverter" },
      { icon: "battery", text: "5kWh/48V Lithium Battery" },
      { icon: "panel", text: "8pcs × 600W Canadian Solar" },
      { icon: "charge", text: "Installation Materials" },
    ],
    warranty: "5 Years Warranty - 10 Years Lifespan",
    powers: [
      "1HP Inverter AC (Day)",
      "Fridge & Freezer",
      "Television",
      "Fans",
      "Pumping Machine",
      "Lighting Points",
      "Charging Appliances",
    ],
    price: "---",
    priceLabel: "INCLUDING DELIVERY & INSTALLATION",
    popular: false,
    enterprise: true,
  },
];

function Pricing() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className={styles.pricing}>
      <h2 className={styles.title}>Affordable Solar Plans</h2>
      <p className={styles.description}>
        Choose the perfect plan for your needs and budget
      </p>
      <div className={styles.grid}>
        {plans.map((plan) => (
          <PlanCard key={plan.name} {...plan} />
        ))}
      </div>
      <p className={styles.formText}>
        For Systems more than 5KVA, or For Industries and Large Companies,
        Kindly Fill this{" "}
        <button className={styles.formLink} onClick={() => setShowForm(true)}>
          form
        </button>
      </p>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </section>
  );
}

export default Pricing;
