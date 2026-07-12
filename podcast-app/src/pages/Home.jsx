import { useEffect, useState } from "react";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
import SortDropdown from "../components/SortDropdown";
import PodcastCard from "../components/PodcastCard";
import Loading from "../components/Loading";

import { getPodcasts } from "../services/api";

function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(
    localStorage.getItem("search") || ""
  );

  const [genre, setGenre] = useState(
    localStorage.getItem("genre") || "all"
  );

  const [sort, setSort] = useState(
    localStorage.getItem("sort") || "updated"
  );

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getPodcasts();

        setPodcasts(data);
        setFiltered(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("search", search);
    localStorage.setItem("genre", genre);
    localStorage.setItem("sort", sort);

    let shows = [...podcasts];

    if (search) {
      shows = shows.filter((show) =>
        show.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (genre !== "all") {
      shows = shows.filter((show) =>
        show.genres.includes(Number(genre))
      );
    }

    if (sort === "title") {
      shows.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    if (sort === "updated") {
      shows.sort(
        (a, b) =>
          new Date(b.updated) -
          new Date(a.updated)
      );
    }

    if (sort === "seasons") {
      shows.sort(
        (a, b) => b.seasons - a.seasons
      );
    }

    setFiltered(shows);
  }, [search, genre, sort, podcasts]);

  return (
    <>
      <Header />

      <main className="container">

        <div className="filters">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <GenreFilter
            genre={genre}
            setGenre={setGenre}
          />

          <SortDropdown
            sort={sort}
            setSort={setSort}
          />

        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="podcast-grid">

            {filtered.map((podcast) => (
              <PodcastCard
                key={podcast.id}
                podcast={podcast}
              />
            ))}

          </div>
        )}

      </main>
    </>
  );
}

export default Home;