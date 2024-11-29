import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDetailedPodcastData, genreMapping } from "../PodcastDataApi"; // Assuming you have this function to fetch podcast details

/**
 * "id": "10716",
    "title": "Something Was Wrong",
    "description": "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
    "seasons": [
        {
            "season": 1,
            "title": "Season 1",
            "image": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/01f0b54164c3703a3cd38bb749621f6647b11f0cb9fe052fae358e01502283a80c02f8fd2258d448bdf37c1fbcfb8d0d1a23bf29201567e0413215c613cf7099.jpeg",
            "episodes": [
                {
                    "title": "There Were No Red Flags",
                    "description": "When Sara got engaged she thought she was marrying the Christian man of her dreams. Until one week before their wedding when she learned - something was wrong. Something Was Wrong is an award winning docuseries podcast about the discovery, trauma and recovery of being engaged to a sociopath.",
                    "episode": 1,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "It Was Weird",
                    "description": "When Sara got engaged she thought she was marrying the Christian man of her dreams. Until one week before their wedding when she learned - something was wrong. Something Was Wrong is an award winning docuseries podcast about the discovery, trauma and recovery of being engaged to a sociopath.",
                    "episode": 2,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "Maple & Finn",
                    "description": "Sara discovers something terrifying about her Fiance.",
                    "episode": 3,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "Kimmy & Brian",
                    "description": "Sara meets some of Dick's friends.",
                    "episode": 4,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "The Devil is a Good Liar",
                    "description": "Sara begins to uncover more about her Fiance.",
                    "episode": 5,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "My Chest Goes Cold",
                    "description": "Sara uncovers a life changing discovery.",
                    "episode": 6,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "We're Done, I'm Running, You're Insane",
                    "description": "It's time to break up with Dick.",
                    "episode": 7,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "There is Much to Confess",
                    "description": "Dick starts \"confessing\".",
                    "episode": 8,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "Unencumbered by the Weight of Women",
                    "description": "Sara speaks with Dick's brother.",
                    "episode": 9,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                },
                {
                    "title": "Real Kimmy & Brian",
                    "description": "Sara and Tiffany find Kimmy and Brian.",
                    "episode": 10,
                    "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
                }
            ]
        },
 * */ 

export default function PodcastDetails() {
  const { id } = useParams(); // Extract the podcast id from the URL
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the podcast details when the component mounts
    fetchDetailedPodcastData(id)
      .then((data) => {
        setPodcast(data); // Set the podcast data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err); // Set error if there's an issue fetching the data
        setLoading(false); // Stop loading
      });
  }, [id]); // Re-run the effect if the `id` changes

  if (loading) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <p>Error: {error.message}</p>; // Show an error message if fetching fails
  }

  if (!podcast) {
    return <p>Podcast not found.</p>; // Show this if no podcast is found
  }

  return (
    <div>
        <div className="podcast-detailed-info">
            <h1>{podcast.title}</h1>
            <img src={podcast.image} alt={podcast.title} />
            <div className="genre-container">
                {podcast.genres.map((genreId) => (
                    <p key={genreId} to={`/genre/${genreId}`} className="genre-label">
                        {genreMapping[genreId]}
                    </p>
                ))}
            </div>
        </div>
    </div>
  );
}
