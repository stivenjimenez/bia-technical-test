import Image from "next/image";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { getCountryByNameAPI } from "@/services/countries";
import styles from "./country.module.css";

export default async function Country({ params }) {
  const data = await getCountryByNameAPI(params.countryName);
  const country = data[0];

  const nativeName = Object.entries(country.name.nativeName).map(
    (name) => name[1].common
  )[0];

  const currencies = Object.entries(country.currencies).map(
    (currency) => currency[1].name
  )[0];

  const languages = Object.values(country.languages).join(", ");

  return (
    <main className={styles.main}>
      <Link className={styles.link} href="/">
        <BiArrowBack size={20} className={styles.icon} />
        Back
      </Link>

      <section className={styles.wrapper}>
        <Image
          width={560}
          height={400}
          src={country.flags.svg}
          alt={country.name.common}
          className={styles.flag}
        />

        <div className={styles.info}>
          <h2>{country.name.common}</h2>
          <div className={styles.infoColumns}>
            <div className={styles.infoColumnsRight}>
              <p className={styles.infoItem}>
                <span>Native Name: </span>
                {nativeName}
              </p>
              <p className={styles.infoItem}>
                <span>Population: </span>
                {country.population}
              </p>
              <p className={styles.infoItem}>
                <span>Region: </span>
                {country.region}
              </p>
              <p className={styles.infoItem}>
                <span>Sub Region: </span>
                {country.subregion}
              </p>
              <p className={styles.infoItem}>
                <span>Capital: </span>
                {country.capital[0]}
              </p>
            </div>

            <div>
              <p className={styles.infoItem}>
                <span>Top Level Domain: </span>
                {country.tld[0]}
              </p>
              <p className={styles.infoItem}>
                <span>Currencies: </span>
                {currencies}
              </p>
              <p className={styles.infoItem}>
                <span>Languages: </span>
                {languages}
              </p>
            </div>
          </div>

          <div>
            <p className={styles.infoItem}>
              <span>Border Countries: </span>
            </p>

            {country.borders.map((border) => {
              return (
                <span className={styles.border} key={border}>
                  {border}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
