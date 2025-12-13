import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { Link } from "react-router-dom";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {
  const [countries, setCountries] = useState([]);
  const [isPending, setTransition] = useTransition();
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  // console.log("This is the countries data", countries);

  useEffect(() => {
    async function fetchData() {
      const result = await getCountryData();
      // console.log("Here is the result", result.data);
      setTransition(() => {
        setCountries(result.data);
      });
      // setPending(false);
    }
    fetchData();
  }, []);
  /// Function for filtering based on search Input
  function searchCountry(country) {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  }
  /// Function for filtering based on Region selection
  function filterRegion(country) {
    if (filter) {
      if (filter === "all") {
        return true;
      }
      return country.region.toLowerCase().includes(filter.toLowerCase());
    }
    return true;
  }
  // Function for calling both search(Input) and filter(region)
  const filterCountries = countries.filter((country) => {
    return searchCountry(country) && filterRegion(country);
  });

  // console.log("filterCountries", filterCountries);

  if (isPending) {
    return (
      <div className="loaderContainer">
        <Loader></Loader>
      </div>
    );
  }
  return (
    <>
      <section className="country-section">
        <div className="filters">
          <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countries={countries}
            setCountries={setCountries}
          ></SearchFilter>
        </div>
        <ul className="grid grid-four-cols">
          {filterCountries.map((curCountry, index) => {
            return <CountryCard country={curCountry} key={index}></CountryCard>;
          })}
        </ul>
      </section>
    </>
  );
}
export default Country;
