// Base URL of the API
const API_URL = 'https://podcast-api.netlify.app';

const genreMapping = {
    1: 'Personal Growth',
    2: 'Investigative Journalism',
    3: 'History',
    4: 'Comedy',
    5: 'Entertainment',
    6: 'Business',
    7: 'Fiction',
    8: 'News',
    9: 'Kids and Family'
};

// Fetch show previews from the API
const fetchPodcastPreviews = async () => {
    const response = await fetch(`${API_URL}`);
    return await response.json();
};

// Fetch detailed show information from the API
const fetchDetailedPodcastData = async (showId) => {
    const response = await fetch(`${API_URL}/id/${showId}`);
    return await response.json();
};

// Fetch genre details from the API
const fetchGenreDetails = async (genreId) => {
    const response = await fetch(`${API_URL}/genre/${genreId}`);
    return await response.json();
};
