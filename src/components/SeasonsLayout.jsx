import { useState, useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchDetailedPodcastData } from "../PodcastDataApi";

export default function SeasonsLayout() {
    const { id } = useParams(); // Get the podcast id from the URL
    const [podcast, setPodcast] = useState(null); // State to store podcast details
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        fetchDetailedPodcastData(id)
            .then((data) => {
                setPodcast(data); // Set podcast data
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch((err) => {
                setError(err); // Set error if there is an issue
                setLoading(false); // Stop loading
            });
    }, [id]); // Re-run effect if the id changes

    // If podcast is loading, show a loading message
    if (loading) {
        return <p>Loading...</p>;
    }

    // If there is an error fetching the podcast data, show an error message
    if (error) {
        return <p>Error loading podcast: {error.message}</p>;
    }

    // If no podcast data is found, show a message
    if (!podcast) {
        return <p>Podcast not found.</p>;
    }

    // Generate the list of season elements with links
    const seasonsElements = podcast.seasons.map((season) => {
        return (
            <div key={season.title} className="season-tile">
                <Link to={`/previews/${id}/season/${season.season}`}>
                    <h3>{season.title}</h3>
                    <p>{season.description}</p> {/* Assuming you have a description for the season */}
                </Link>
            </div>
        );
    });

    return (
        <div>
            <h2>Seasons</h2>
            <div className="seasons-container-layout">
                {seasonsElements}
            </div>
            <Outlet/>
        </div>
    );
}
