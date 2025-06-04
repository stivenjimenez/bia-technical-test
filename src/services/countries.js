export async function getAllCountriesAPI() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching countries");
  }
}

export async function getCountriesByRegionAPI(region) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,population,flags`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching countries");
  }
}

export async function getCountryByNameAPI(name) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching countries");
  }
}
