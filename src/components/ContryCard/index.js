import Image from "next/image";
import styles from "./countryCard.module.css";
export default function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <Image
        unoptimized
        width={267}
        height={160}
        src={country.flags.png}
        alt={country.name.common}
        className={styles.flag}
      />
      <div className={styles.infoWrapper}>
        <h3 className={styles.name}>{country.name.common}</h3>

        <p className={styles.info}>
          <span>Population:</span> {country.population}
        </p>

        <p className={styles.info}>
          <span>Region:</span> {country.region}
        </p>

        <p className={styles.info}>
          <span>Capital:</span> {country.capital[0]}
        </p>
      </div>
    </div>
  );
}
