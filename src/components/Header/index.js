import { BiMoon } from "react-icons/bi";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Where in the world?</h1>
        <button className={styles.button}>
          <BiMoon size={20} className={styles.icon} />
          Dark Mode
        </button>
      </div>
    </header>
  );
}
