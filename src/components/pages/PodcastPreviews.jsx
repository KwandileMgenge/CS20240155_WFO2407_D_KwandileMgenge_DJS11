import { useState, useEffect } from "react";
import { fetchPodcastPreviews, genreMapping } from "../../PodcastDataApi";
import { Link } from "react-router-dom";

/**
 * Example Podcast Object
 * {
 *     "id": "10716",
 *     "title": "Something Was Wrong",
 *     "description": "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
 *     "seasons": 14,
 *     "image": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
 *     "genres": [1, 2],
 *     "updated": "2022-11-03T07:00:00.000Z"
 * }
 */

export default function PodcastPreviews() {
    const [podcastsPreviews, setPodcastsPreviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPodcastPreviews()
            .then((data) => {
                const sortedShows = data.sort((a, b) => a.title.localeCompare(b.title));
                setPodcastsPreviews(sortedShows);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const podcastElements = podcastsPreviews.map((podcast) => (
        <div key={podcast.id} className="podcast-tile">
            <Link to={`/previews/${podcast.id}`}>
                <img src={podcast.image} alt={podcast.title} />
                <div className="podcast-preview-info">
                    <div className="genre-container">
                        {podcast.genres.map((genreId) => (
                            <p key={genreId} to={`/genre/${genreId}`} className="genre-label">
                                {genreMapping[genreId]}
                            </p>
                        ))}
                    </div>
                    <h3>{podcast.title}</h3>
                    <p>{`${podcast.seasons} ${podcast.seasons > 1 ? "seasons" : "season"}`}</p>
                </div>
            </Link>
        </div>
    ));
    

    return (
        <>
            <h1>Podcast Previews</h1>
            <div>
                <h1>Explore and listen to our podcasts</h1>
                <div className="previews-container">
                    {loading ? 'Loading...' : podcastElements}
                    {error && <p>Error loading podcasts: {error.message}</p>}
                </div>
            </div>
        </>
    );
}
