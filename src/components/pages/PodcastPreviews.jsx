import { useState, useEffect } from "react";
import { fetchPodcastPreviews, genreMapping } from "../../PodcastDataApi";
import { Link, useSearchParams } from "react-router-dom";

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
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query'); 
    const [podcastsPreviews, setPodcastsPreviews] = useState([]);
    const [filteredPreviews, setFilteredPreviews] = useState([])
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

    useEffect(() => {
        if (query && !'') {
            const filtered = podcastsPreviews.filter((podcast) => 
                podcast.title.toLowerCase().includes(query.toLowerCase()) || 
                podcast.description.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredPreviews(filtered);
        } else {
            setFilteredPreviews(podcastsPreviews)
        }
    }, [query]);

    const handleSortChange = (order) => {
        const sorted = [...podcastsPreviews].sort((a, b) =>
          order === 'asc'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title)
        );
        setPodcastsPreviews(sorted);
    };

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
            <div>
                {/* Sort Options */}
                <div className="sort-options">
                    <button onClick={() => handleSortChange('asc')}>Sort A-Z</button>
                    <button onClick={() => handleSortChange('desc')}>Sort Z-A</button>
                </div>
                <div className="previews-container">
                    {loading ? 'Loading...' : podcastElements}
                    {error && <p>Error loading podcasts: {error.message}</p>}
                </div>
            </div>
        </>
    );
}
