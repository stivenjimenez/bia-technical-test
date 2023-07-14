"use client";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import CountryCard from "@/components/ContryCard";
import {
  getAllCountriesAPI,
  getCountriesByRegionAPI,
} from "@/services/countries";
import styles from "./page.module.css";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filterRegion, setFilterRegion] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterText, setFilterText] = useState("");

  const handleSelectChange = (e) => {
    setFilterRegion(e.target.value);
  };

  useEffect(() => {
    if (!filterRegion) return;

    if (filterRegion === "all") {
      getAllCountriesAPI().then((data) => setCountries(data));
      return;
    }

    getCountriesByRegionAPI(filterRegion).then((data) => setCountries(data));
  }, [filterRegion]);

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
    getAllCountriesAPI().then((data) => setCountries(data));
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.searchSection}>
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

        <select
          className={styles.region}
          name="region"
          value={filterRegion}
          onChange={handleSelectChange}
        >
          <option value="all">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      <div className={styles.grid}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </div>
    </main>
  );
}
