import { useContext } from "react";
import { PodcastContext } from "../../context/PodcastContextStore";
import { AudioPlayerContext } from "../../context/AudioPlayerContext";
import styles from "./Favorite.module.css";

/**
 * Displays either:
 * - A favorites badge for the header
 * - A grouped list of favorite episodes
 */
export default function FavoriteCard({
  episodes,
  toggleEpisodeFavorite,
}) {
  const { favoriteEpisodesCount } = useContext(PodcastContext);

  const {
    episode: currentEpisode,
    isPlaying,
    playEpisode,
  } = useContext(AudioPlayerContext);

  // Group episodes by podcast title
  const favoriteGroups = Array.isArray(episodes)
    ? Object.values(
        episodes.reduce((result, item) => {
          const podcastName =
            item.podcastTitle || "Unknown Podcast";

          if (!result[podcastName]) {
            result[podcastName] = {
              title: podcastName,
              image: item.podcastImage,
              episodes: [],
            };
          }

          result[podcastName].episodes.push(item);

          return result;
        }, {})
      )
    : [];

  // Display favorites badge
  if (!Array.isArray(episodes)) {
    return (
      <span className={styles.badge}>
        <span className={styles.favoriteText}>
          Favorites ({favoriteEpisodesCount})
        </span>
        <span className={styles.star}>⭐</span>
      </span>
    );
  }

  // Display empty message
  if (episodes.length === 0) {
    return (
      <p className={styles.emptyFavorites}>
        No favorite episodes yet. Click the star on an episode to add it here.
      </p>
    );
  }

  return (
    <section className={styles.favoriteEpisodes}>
      {favoriteGroups.map((podcast) => (
        <div
          key={podcast.title}
          className={styles.favoriteGroup}
        >
          <div className={styles.favoriteGroupHeader}>
            <img
              src={podcast.image}
              alt={podcast.title}
              className={styles.favoriteGroupImage}
            />

            <div>
              <h2 className={styles.favoriteGroupTitle}>
                {podcast.title}
              </h2>

              <p className={styles.favoriteGroupCount}>
                {podcast.episodes.length} favorite episode
                {podcast.episodes.length !== 1 && "s"}
              </p>
            </div>
          </div>

          {podcast.episodes.map((item) => {
            const isActive =
              currentEpisode?.key === item.key;

            const playingNow =
              isActive && isPlaying;

            return (
              <article
                key={item.key}
                className={styles.favoriteEpisodeCard}
              >
                <img
                  src={item.seasonImage || item.podcastImage}
                  alt={item.episodeTitle}
                  className={styles.favoriteEpisodeImage}
                />

                <div className={styles.favoriteEpisodeInfo}>
                  <h3>{item.episodeTitle}</h3>

                  <p className={styles.favoriteEpisodeMeta}>
                    Season {item.seasonNumber} · Episode{" "}
                    {item.episodeNumber}
                  </p>

                  <p
                    className={
                      styles.favoriteEpisodeDescription
                    }
                  >
                    {item.description}
                  </p>

                  <p className={styles.addedDate}>
                    Added on{" "}
                    {new Date(
                      item.addedAt ?? item.updated
                    ).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </p>

                  <button
                    type="button"
                    className={`${styles.favoriteEpisodePlay} ${
                      playingNow ? styles.playing : ""
                    }`}
                    onClick={() =>
                      playEpisode(item, episodes)
                    }
                    aria-label={
                      playingNow
                        ? `Pause ${item.episodeTitle}`
                        : `Play ${item.episodeTitle}`
                    }
                  >
                    {playingNow
                      ? "⏸ Pause"
                      : isActive
                      ? "▶ Resume"
                      : "▶ Play"}
                  </button>
                </div>

                <div className={styles.favoriteEpisodeActions}>
                  <button
                    type="button"
                    className={
                      styles.favoriteEpisodeRemove
                    }
                    onClick={() =>
                      toggleEpisodeFavorite(item)
                    }
                    aria-label={`Remove ${item.episodeTitle} from favorites`}
                  >
                    Remove
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ))}
    </section>
  );
}