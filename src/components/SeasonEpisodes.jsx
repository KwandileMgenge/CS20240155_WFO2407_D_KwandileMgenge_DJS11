import { useEffect, useState } from "react"
import { fetchDetailedPodcastData } from "../PodcastDataApi"
import { useParams } from "react-router-dom"

// {
//     "id": "10716",
//     "title": "Something Was Wrong",
//     "description": "Something Was Wrong is an Iris Award-winning true-crime docuseries about the discovery, trauma, and recovery from shocking life events and abusive relationships.",
//     "seasons": [
//         {
//             "season": 1,
//             "title": "Season 1",
//             "image": "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/01f0b54164c3703a3cd38bb749621f6647b11f0cb9fe052fae358e01502283a80c02f8fd2258d448bdf37c1fbcfb8d0d1a23bf29201567e0413215c613cf7099.jpeg",
//             "episodes": [
//                 {
//                     "title": "There Were No Red Flags",
//                     "description": "When Sara got engaged she thought she was marrying the Christian man of her dreams. Until one week before their wedding when she learned - something was wrong. Something Was Wrong is an award winning docuseries podcast about the discovery, trauma and recovery of being engaged to a sociopath.",
//                     "episode": 1,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "It Was Weird",
//                     "description": "When Sara got engaged she thought she was marrying the Christian man of her dreams. Until one week before their wedding when she learned - something was wrong. Something Was Wrong is an award winning docuseries podcast about the discovery, trauma and recovery of being engaged to a sociopath.",
//                     "episode": 2,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "Maple & Finn",
//                     "description": "Sara discovers something terrifying about her Fiance.",
//                     "episode": 3,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "Kimmy & Brian",
//                     "description": "Sara meets some of Dick's friends.",
//                     "episode": 4,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "The Devil is a Good Liar",
//                     "description": "Sara begins to uncover more about her Fiance.",
//                     "episode": 5,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "My Chest Goes Cold",
//                     "description": "Sara uncovers a life changing discovery.",
//                     "episode": 6,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "We're Done, I'm Running, You're Insane",
//                     "description": "It's time to break up with Dick.",
//                     "episode": 7,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "There is Much to Confess",
//                     "description": "Dick starts \"confessing\".",
//                     "episode": 8,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "Unencumbered by the Weight of Women",
//                     "description": "Sara speaks with Dick's brother.",
//                     "episode": 9,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 },
//                 {
//                     "title": "Real Kimmy & Brian",
//                     "description": "Sara and Tiffany find Kimmy and Brian.",
//                     "episode": 10,
//                     "file": "https://podcast-api.netlify.app/placeholder-audio.mp3"
//                 }
//             ]
//         }
//     }

export default function SeasonEpisodes() {
    const [seasons, setSeasons] = useState([])
    const {id, season} = useParams()

    const seasonId = season

    useEffect( () => {
        fetchDetailedPodcastData(id).then(data => (
            setSeasons(data.seasons)
        ))
    }, [id])

    const filteredSeason = seasons[seasonId -1]
    console.log(filteredSeason)

    // const episodeElements = seasons[seasonId-1].episodes.map((episode) => (
    //     <div>
    //         {episode.tit}
    //     </div>
    // ))

    if (!seasons) {
        return <p>Season not found.</p>; // Show if the season ID doesn't exist in the seasons array
    }

    const episodeElements = filteredSeason.episodes.map((episode) => (
        <div key={episode.episode}>
            <h3>{episode.title}</h3>
            <p>{episode.description}</p>
            <audio controls>
                <source src={episode.file} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    ));

    // Map through episodes in the selected season
    // const episodeElements = seasons.map((season) => (
    //     season.season[seasonId].episodes
    // ));

    return (
        <div>
            {/* <h2>Episodes for {season.title}</h2> */}
            {/* {episodeElements} */}
        </div>
    );
}