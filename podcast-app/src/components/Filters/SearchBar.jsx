import { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../../context/PodcastContextStore";
import styles from "./SearchBar.module.css";

/**
 * Search field that updates the search value
 * after a short delay.
 */
export default function SearchBar() {
  const {
    search: currentSearch,
    setSearch: updateSearch,
  } = useContext(PodcastContext);

  const [searchText, setSearchText] = useState(currentSearch);

  // Wait briefly before updating the search value
  useEffect(() => {
    const timeout = setTimeout(() => {
      updateSearch(searchText);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText, updateSearch]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <input
      type="search"
      className={styles.searchInput}
      placeholder="Search podcasts..."
      value={searchText}
      onChange={handleSearchChange}
    />
  );
}