"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CountryCard from "@/components/ContryCard";

export default function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags"
      );
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {countries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </main>
  );
}
