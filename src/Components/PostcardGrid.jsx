import PodcastCard from "./PodcastCard";

function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
        />
      ))}
    </section>
  );
}

export default PodcastGrid;