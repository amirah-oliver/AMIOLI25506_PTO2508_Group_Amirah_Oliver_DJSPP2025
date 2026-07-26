import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContextStore";
import styles from "./GenreFilter.module.css";

/**
 * Dropdown used to filter podcasts by genre.
 *
 * @param {{ genres: Array }} props
 */
export default function GenreFilter({ genres }) {
  const { genre: selectedGenre, setGenre: updateGenre } =
    useContext(PodcastContext);

  const handleGenreChange = (event) => {
    updateGenre(event.target.value);
  };

  return (
    <select
      className={styles.select}
      value={selectedGenre}
      onChange={handleGenreChange}
    >
      <option value="all">All Genres</option>

      {genres.map((genre) => (
        <option
          key={genre.id}
          value={genre.id}
        >
          {genre.title}
        </option>
      ))}
    </select>
  );
}