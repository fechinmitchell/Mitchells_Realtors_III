import styles from "./Search.module.scss";
import Navbar from "../../navbar/Navbar";
import { useState } from "react";

import SearchContext from "./SearchContext";
import Filters from "./Filters/Filters";
import QueryCards from "./QueryCards";
import Footer from "../Home/Sections/Footer";

const Search = () => {
  //STATES
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);
  const [location, setLocation] = useState("");
  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  //CONTEXT
  const value = {
    buy,
    setBuy,
    rent,
    setRent,
    priceFilter,
    location,
    setLocation,
    setPriceFilter,
  };

  return (
    <main>
      <Navbar />
      <h1 className={styles.title}>Search</h1>
      <SearchContext.Provider value={value}>
        <Filters />
        <QueryCards />
      </SearchContext.Provider>
      <Footer />
    </main>
  );
};

export default Search;
