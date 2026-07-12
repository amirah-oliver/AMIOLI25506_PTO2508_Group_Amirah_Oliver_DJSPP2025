import { genres } from "../data/genres";

function GenreFilter({ genre, setGenre }) {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      <option value="all">All Genres</option>

      {genres.map((item) => (
        <option key={item.id} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;