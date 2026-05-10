import { useState } from "react";
import styles from "./faq.module.css";
import { FaCaretDown } from "react-icons/fa";

const faquestion = [
  {
    question: "How is solar better than generator + fuel?",
    answer:
      "Solar is better than generator + fuel because it gives silent, consistent power without daily fuel costs. Once installed, sunlight is free. No refueling, no fumes, no engine breakdowns, and no midnight runs for petrol.",
  },
  {
    question:
      "Can it run heavy appliances like AC, fridge, or pumping machines?",
    answer:
      "Solar systems can run heavy appliances like air conditioners, refrigerators, and pumping machines when properly sized. The capacity depends on your energy needs and the system installed. Check our plans above to see the option that best supports your appliances and usage.",
  },
  {
    question:
      "How long does installation take? Do I need a large roof or land space?",
    answer:
      "Installation is usually completed within 1 to 3 days, depending on the system size and site setup. You don't need a large roof or land space. Solar systems can be installed on most rooftops or compact areas, and we assess your space to design the most efficient setup.",
  },
];

function Faq() {
  const [isOpen, setIsOpen] = useState(null);

  function handleToggle(index) {
    setIsOpen(isOpen === index ? null : index);
  }

  return (
    <section className={styles.faq} id="faq">
      <h2 className={styles.title}>Frequently Asked Questions</h2>
      <div className={styles.list}>
        {faquestion.map((item, index) => (
          <div key={item.question} className={styles.item}>
            <button
              className={`${styles.question} ${isOpen === index ? styles.active : ""}`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <FaCaretDown
                size={16}
                className={`${styles.arrow} ${isOpen === index ? styles.arrowOpen : ""}`}
              />
            </button>
            {isOpen === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
