import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

import GenreTags from "../UI/GenreTags";
import styles from "./PodcastCard.module.css";

/**
 * Displays a preview card for a podcast.
 * Clicking the card takes the user
 * to the selected podcast's details page.
 */
export default function PodcastCard({ podcast }) {
  const navigate = useNavigate();

  const openPodcast = () => {
    navigate(`/show/${podcast.id}`, {
      state: {
        genres: podcast.genres,
      },
    });
  };

  return (
    <div
      className={styles.card}
      onClick={openPodcast}
    >
      <img
        src={podcast.image}
        alt={podcast.title}
      />

      <h3>{podcast.title}</h3>

      <p className={styles.seasons}>
        {podcast.seasons} seasons
      </p>

      <GenreTags genres={podcast.genres} />

      <p className={styles.updatedText}>
        Last updated {formatDate(podcast.updated)}
      </p>
    </div>
  );
}