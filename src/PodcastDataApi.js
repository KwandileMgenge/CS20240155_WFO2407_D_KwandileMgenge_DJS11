// Base URL of the API
const API_URL = 'https://podcast-api.netlify.app';

export const genreMapping = {
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
export const fetchPodcastPreviews = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();

    // Save the fetched data to local storage
    localStorage.setItem('podcastPreviews', JSON.stringify(data)); // Store data as a JSON string
    
    return data;
};

// Fetch detailed show information from the API
export const fetchDetailedPodcastData = async (showId) => {
    const response = await fetch(`${API_URL}/id/${showId}`);
    const data = await response.json();

    // Save the detailed data to local storage (you can store it using the showId)
    localStorage.setItem(`podcastDetails_${showId}`, JSON.stringify(data)); // Store data as a JSON string
    
    return data;
};

// Fetch genre details from the API
export const fetchGenreDetails = async (genreId) => {
    const response = await fetch(`${API_URL}/genre/${genreId}`);
    const data = await response.json();

    // Save the genre data to local storage
    localStorage.setItem(`genreDetails_${genreId}`, JSON.stringify(data)); // Store data as a JSON string
    
    return data;
};

// Example function to retrieve the saved data from localStorage
export const getPodcastPreviewsFromStorage = () => {
    const savedData = localStorage.getItem('podcastPreviews');
    return savedData ? JSON.parse(savedData) : null;
};

export const getPodcastDetailsFromStorage = (showId) => {
    const savedData = localStorage.getItem(`podcastDetails_${showId}`);
    return savedData ? JSON.parse(savedData) : null;
};

export const getGenreDetailsFromStorage = (genreId) => {
    const savedData = localStorage.getItem(`genreDetails_${genreId}`);
    return savedData ? JSON.parse(savedData) : null;
};
