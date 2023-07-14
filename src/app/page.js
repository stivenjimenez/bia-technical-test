import styles from "./page.module.css";
import Countries from "@/components/Countries";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Countries />
      </div>
    </main>
  );
}
