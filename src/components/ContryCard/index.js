"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./countryCard.module.css";
export default function CountryCard({ country }) {
  const router = useRouter();

  return (
    <div
      className={styles.card}
      onClick={() => router.push(`/country/${country.name.common}`)}
    >
      <Image
        unoptimized
        width={267}
        height={160}
        src={country.flags.svg}
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
