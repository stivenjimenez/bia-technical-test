"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CountryCard from "@/components/ContryCard";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const filterCountries = (searchText) => {
      if (searchText.trim() === "") {
        setFilteredCountries(countries);
      } else {
        const filtered = countries.filter((country) => {
          const countryName = country.name.common.toLowerCase();
          return countryName.includes(searchText.toLowerCase());
        });
        setFilteredCountries(filtered);
      }
    };

    filterCountries(filterText);
  }, [filterText, countries]);

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
      <div className={styles.search}>
        <BiSearch className={styles.searchIcon} size={18} color="#848484" />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setFilterText(e.target.value)}
          value={filterText}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.grid}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </main>
  );
}
