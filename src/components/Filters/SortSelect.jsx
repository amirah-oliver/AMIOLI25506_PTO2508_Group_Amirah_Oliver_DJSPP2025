import { useContext } from "react";
import {
  PodcastContext,
  SORT_OPTIONS,
} from "../../context/PodcastContextStore";
import styles from "./SortSelect.module.css";

/**
 * Select menu for changing
 * the podcast sorting option.
 */
export default function SortSelect() {
  const {
    sortKey: selectedSort,
    setSortKey: updateSort,
  } = useContext(PodcastContext);

  const handleSortChange = (event) => {
    updateSort(event.target.value);
  };

  return (
    <select
      className={styles.select}
      value={selectedSort}
      onChange={handleSortChange}
    >
      {SORT_OPTIONS.map((option) => (
        <option
          key={option.key}
          value={option.key}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}