import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Loading from "../components/Loading";
import { genres } from "../data/genres";
import { getPodcast } from "../services/api";

function ShowDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(0);

  useEffect(() => {
    async function loadPodcast() {
      try {
        const data = await getPodcast(id);
        setPodcast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadPodcast();
  }, [id]);

  if (loading) return <Loading />;

  if (!podcast) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>Podcast not found.</h2>
          <button onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </>
    );
  }

  const genreNames = podcast.genres.map((genreId) => {
    const genre = genres.find((g) => g.id === genreId);
    return genre ? genre.title : "Unknown";
  });

  const currentSeason = podcast.seasons[selectedSeason];

  const totalEpisodes = podcast.seasons.reduce(
    (total, season) => total + season.episodes.length,
    0
  );

  return (
    <>
      <Header />

      <main className="show-page">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <section className="show-header">

          <img
            src={podcast.image}
            alt={podcast.title}
            className="show-image"
          />

          <div className="show-info">

            <h1>{podcast.title}</h1>

            <p>{podcast.description}</p>

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
              <strong>Last Updated:</strong>{" "}
              {new Date(
                podcast.updated
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>Total Seasons:</strong>{" "}
              {podcast.seasons.length}
            </p>

            <p>
              <strong>Total Episodes:</strong>{" "}
              {totalEpisodes}
            </p>

          </div>

        </section>

        <section className="season-section">

          <div className="season-top">

            <h2>Current Season</h2>

            <select
              value={selectedSeason}
              onChange={(e) =>
                setSelectedSeason(Number(e.target.value))
              }
            >
              {podcast.seasons.map((season, index) => (
                <option
                  key={season.title}
                  value={index}
                >
                  {season.title}
                </option>
              ))}
            </select>

          </div>

          <h3>{currentSeason.title}</h3>

          <img
            src={currentSeason.image}
            alt={currentSeason.title}
            className="season-image"
          />

          <div className="episodes">

            {currentSeason.episodes.map((episode) => (
              <div
                key={episode.episode}
                className="episode-card"
              >
                <h3>
                  Episode {episode.episode}: {episode.title}
                </h3>

                <p>{episode.description}</p>
              </div>
            ))}

          </div>

        </section>

      </main>
    </>
  );
}

export default ShowDetail;