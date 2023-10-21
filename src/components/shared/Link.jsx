import styles from "./Link.module.css";

export default function Link({ children, text, href }) {
  return (
    <a href={href} className={styles.link}>
      {children}
      <span className={styles.text}>{text}</span>
    </a>
  )
}
