import styles from "./Buttons.module.css";

function Button({ children, variant = "primary", href, onClick }) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default Button;
