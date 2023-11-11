
import { Link } from "react-router-dom";
import styles from "./Url.module.css";

export default function Url({ children, text, to }) {
  return (
    <Link to={to} className={styles.link}>
      {children}
      <span className={styles.text}>{text}</span>
    </Link>
  )
}
