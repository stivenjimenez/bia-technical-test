import styles from "./page.module.css";
import Countries from "@/components/Countries";

export default function Home() {
  return (
    <main className={styles.main}>
      <Countries />
    </main>
  );
}
