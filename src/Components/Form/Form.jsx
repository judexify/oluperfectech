import { useState } from "react";
import styles from "./Form.module.css";
import { FaTimes } from "react-icons/fa";
console.log(import.meta.env);

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  systemSize: "",
  additionalInfo: "",
};

function Form({ onClose }) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { fullName, email, phone, systemSize } = formData;
    if (!fullName || !email || !phone || !systemSize)
      return alert("Please fill all required fields.");

    setStatus("loading");

    fetch(import.meta.env.VITE_PROFORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("success");
          setFormData(initialState);
        } else {
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setStatus("error");
      });
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} type="button" onClick={onClose}>
          <FaTimes size={16} />
        </button>

        <h2 className={styles.title}>
          Request Quote - Solar Systems Above 5kVA
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              className={styles.input}
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Email Address</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Phone Number</label>
            <input
              className={styles.input}
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Solar System Size</label>
            <select
              className={styles.select}
              name="systemSize"
              value={formData.systemSize}
              onChange={handleChange}
            >
              <option value="">Select system size</option>
              <option value="6KVA">6 KVA</option>
              <option value="7.5KVA">7.5 KVA</option>
              <option value="10KVA">10 KVA</option>
              <option value="Custom">Custom / Not Sure</option>
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Additional Information (Optional)
            </label>
            <textarea
              className={styles.textarea}
              name="additionalInfo"
              placeholder="Tell us about your energy needs, location, or any specific requirements..."
              value={formData.additionalInfo}
              onChange={handleChange}
              rows={4}
            />
          </div>

          {status === "success" && (
            <p className={styles.successMsg}>
              Request sent! We'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className={styles.errorMsg}>
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
