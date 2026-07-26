import { Link } from "react-router-dom";
import { genres } from "../data/genres";

function PodcastCard({ podcast }) {
  const genreNames = podcast.genres.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.title : "Unknown";
  });

  return (
    <Link to={`/show/${podcast.id}`} className="podcast-link">
      <article className="card">

        <div className="image-wrapper">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="card-image"
          />

          <button className="fav-btn">♡</button>
        </div>

        <div className="card-content">

          <h2>{podcast.title}</h2>

          <p className="season-count">
            {podcast.seasons} Seasons
          </p>

          <div className="genre-tags">
            {genreNames.map((genre) => (
              <span key={genre} className="tag">
                {genre}
              </span>
            ))}
          </div>

          <p className="updated">
            Updated{" "}
            {new Date(podcast.updated).toLocaleDateString()}
          </p>

        </div>

      </article>
    </Link>
  );
}

export default PodcastCard;