const BASE_URL = "https://podcast-api.netlify.app";

/**
 * Fetch all podcast previews
 * @returns {Promise<Array>}
 */
export async function getPodcasts() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts.");
  }

  return await response.json();
}

/**
 * Fetch one podcast
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function getPodcast(id) {
  const response = await fetch(`${BASE_URL}/id/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch podcast.");
  }

  return await response.json();
}