<div className="modal-content">

    <img src={podcast.image} alt={podcast.title} />

    <div className="modal-info">
        <h1>{podcast.title}</h1>

        <p>{podcast.description}</p>

        <h3>Genres</h3>

        <p>{podcast.genres.join(", ")}</p>

        <button onClick={close}>Close</button>
    </div>

</div>