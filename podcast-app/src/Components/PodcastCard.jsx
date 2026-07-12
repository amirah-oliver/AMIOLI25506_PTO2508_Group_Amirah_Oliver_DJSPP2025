import { Link } from "react-router-dom";
import { genres } from "../data/genres";

function PodcastCard({ podcast }) {
  const genreNames = podcast.genres.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.title : "Unknown";
  });

  return (
    <Link
      to={`/show/${podcast.id}`}
      className="podcast-link"
    >
      <article className="card">

        <img
          src={podcast.image}
          alt={podcast.title}
          className="card-image"
        />

        <div className="card-content">

          <h2>{podcast.title}</h2>

          <p>{podcast.seasons} Seasons</p>

          <div className="genre-tags">
            {genreNames.map((genre) => (
              <span
                className="tag"
                key={genre}
              >
                {genre}
              </span>
            ))}
          </div>

          <p>
            Updated{" "}
            {new Date(
              podcast.updated
            ).toLocaleDateString()}
          </p>

        </div>

      </article>
    </Link>
  );
}

export default PodcastCard;