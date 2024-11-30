# Podcast App | Portfolio Piece 🎵💿

This is a React-based podcast application created as part of my portfolio project. The application fetches data from a podcast API and provides users with an interactive and engaging way to explore shows, seasons, episodes, and their genres.

--- 

Netlify Link (<https://teal-unicorn-05053a.netlify.app/>)

## Table of Contents

- [🤖 Technology](#technology)
- [📦 Data](#data)
- [🧑 User Stories](#user-stories)
- [🧑‍💻 Setup Instructions](#setup-instructions)
- [⚙️ Endpoints](#endpoints)
- [🎶 Genre Titles](#genre-titles)
- [📱 Project Features](#project-features)
- [💬 Contact Information](#contact-information)

---

## 🤖 Technology

The podcast app is built using:

- **React**: The core JavaScript library for building the UI.
- **React Router**: For handling dynamic routing and navigation.
- **Local Storage**: To persist user preferences and favorite episodes across sessions.
- **CSS Modules**: For styling the application in a modular and maintainable way.
- **API Integration**: Fetching podcast data from the podcast API (hosted on Netlify) using `fetch()`.

---

## 📦 Data

The application works with the following data structures:

- **SHOW**: Represents a podcast, which can contain multiple seasons.
- **SEASON**: A collection of episodes released over a specific time period.
- **EPISODE**: A specific podcast episode, including metadata such as duration, title, description, and a link to the MP3 file.

Additionally, the app makes use of the following entities:

- **PREVIEW**: A summarized version of a show with basic details.
- **GENRE**: The genre information for a show (e.g., History, Comedy, etc.).

### Relationships

- **SHOW** → Contains multiple **SEASONS**.
- **SEASON** → Contains multiple **EPISODES**.
- **SHOW** → Belongs to one or more **GENRES**.

---

## 🧑 User Stories

### CORE PROJECT REQUIREMENTS ✅

| Code   | Category              | User Story                                                                                          | Difficulty | Total |
|--------|-----------------------|-----------------------------------------------------------------------------------------------------|------------|-------|
| P3.1   | Setup and Deployment  | Project is deployed to a custom Netlify URL                                                          | Medium     | 2     |
| P3.4   | UI/UX                  | User sees the name of all available shows on the platform                                            | Easy       | 1     |
| P3.5   | UI/UX                  | User sees shows sorted alphabetically when the app loads (default sorting)                          | Hard       | 3     |
| P3.6   | UI/UX                  | User has a way to listen to any episode in a season for a show                                      | Medium     | 2     |
| P3.16  | Data Fetching & State  | All show data loaded via a fetch call from the API (no podcast data should be hardcoded)            | Medium     | 2     |
| P3.17  | Data Fetching & State  | When viewing a specific show, data is loaded via fetch from the individual show endpoint            | Medium     | 2     |
| P3.20  | User Interaction       | User is able to mark specific episodes as favorites to find them again                             | Hard       | 3     |
| P3.39  | Persistence & Storage  | Favourites must be persisted in localStorage                                                          | Hard       | 3     |
| P3.45  | Overall Assessment     | The README file includes a comprehensive introduction to the project, setup instructions, usage examples, and contact information. | Easy       | 3     |
| P3.46  | Overall Assessment     | The project loads and functions without any bugs (Completed user stories possess no bugs whatsoever) | Hard       | 4     |

---

## 🧑‍💻 Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/podcast-app.git
   ```

2. Install dependencies:
   ```bash
   cd podcast-app
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

   Your app will be available at `http://localhost:3000`.

4. Build for production (for deployment to Netlify):
   ```bash
   npm run build
   ```

5. Deploy the production build to your custom Netlify URL.

---

## ⚙️ Endpoints

The podcast data is fetched from the following API endpoints:

- **GET `/`** - Returns an array of **PREVIEW** objects.
- **GET `/genre/<ID>`** - Returns a **GENRE** object.
- **GET `/id/<ID>`** - Returns a **SHOW** object, including all seasons and episodes.

Example API request:
```
https://podcast-api.netlify.app/id/1234
```

---

## 🎶 Genre Titles

Here is the mapping of genre IDs to genre titles:

| ID  | Title                 |
|-----|-----------------------|
| 1   | Personal Growth       |
| 2   | Investigative Journalism |
| 3   | History               |
| 4   | Comedy                |
| 5   | Entertainment         |
| 6   | Business              |
| 7   | Fiction               |
| 8   | News                  |
| 9   | Kids and Family       |

---

## 📱 Project Features

- **Sorting and Filtering**: Users can sort shows alphabetically, by the most recent, or by genre. 
- **Favorites**: Users can mark episodes as favorites, and these are stored in `localStorage` for persistence across sessions.
- **Interactive Audio Player**: The app allows users to play episodes directly within the browser.
- **Seasons and Episodes View**: Users can view shows by seasons, with each season displaying its episodes.
- **Preview & Genre Information**: Shows are displayed with genre information, and users can filter podcasts by genre.

---

## 💬 Contact Information

For questions or feedback, feel free to reach out:

- **GitHub**: [https://github.com/yourusername](https://github.com/yourusername)
- **Email**: [youremail@example.com](mailto:youremail@example.com)

---

Thank you for checking out the Podcast App! 🎧
