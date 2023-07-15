"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./countryCard.module.css";
export default function CountryCard({ country }) {
  return (
    <Link className={styles.card} href={`/country/${country.name.common}`}>
      <Image
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
    </Link>
  );
}
