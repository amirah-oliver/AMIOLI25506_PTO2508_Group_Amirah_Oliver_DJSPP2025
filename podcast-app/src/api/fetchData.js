/**
 * Retrieves all podcasts from the API.
 *
 * @param {Function} updatePodcasts - Updates the podcast state.
 * @param {Function} updateError - Stores any error message.
 * @param {Function} updateLoading - Controls the loading state.
 */
export async function fetchPodcasts(
  updatePodcasts,
  updateError,
  updateLoading
) {
  try {
    const response = await fetch("https://podcast-api.netlify.app");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const podcasts = await response.json();
    updatePodcasts(podcasts);
  } catch (error) {
    console.error("Unable to load podcasts:", error);
    updateError(error.message);
  } finally {
    updateLoading(false);
  }
}

/**
 * Retrieves one podcast using its ID.
 *
 * @param {string|number} id - Podcast ID.
 * @param {Function} updatePodcast - Updates the selected podcast.
 * @param {Function} updateError - Stores any error message.
 * @param {Function} updateLoading - Controls the loading state.
 */
export async function fetchSinglePodcast(
  id,
  updatePodcast,
  updateError,
  updateLoading
) {
  try {
    const response = await fetch(
      `https://podcast-api.netlify.app/id/${id}`
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const podcast = await response.json();
    updatePodcast(podcast);
  } catch (error) {
    console.error("Unable to load podcast:", error);
    updateError(error.message);
  } finally {
    updateLoading(false);
  }
}

/**
 * Gets a single genre from the API.
 *
 * @param {string|number} genreId - Genre identifier.
 * @returns {Promise<Object>} Genre information.
 */
export async function fetchGenreById(genreId) {
  if (!genreId && genreId !== 0) {
    throw new Error("Genre ID is required.");
  }

  const response = await fetch(
    `https://podcast-api.netlify.app/genre/${genreId}`
  );

  if (!response.ok) {
    throw new Error(`Unable to retrieve genre: ${response.status}`);
  }

  const genre = await response.json();
  return genre;
}

/**
 * Retrieves multiple genres while removing duplicates.
 *
 * @param {Array} genreIds - List of genre IDs.
 * @returns {Promise<Array>} Array of genre objects.
 */
export async function fetchGenresByIds(genreIds = []) {
  const ids = [...new Set(genreIds)].filter(
    (genreId) => genreId !== null && genreId !== undefined && genreId !== ""
  );

  const genreList = await Promise.all(
    ids.map(async (genreId) => {
      try {
        return await fetchGenreById(genreId);
      } catch (error) {
        console.error(`Unable to fetch genre ${genreId}:`, error);
        return null;
      }
    })
  );

  return genreList.filter((genre) => genre !== null);
}