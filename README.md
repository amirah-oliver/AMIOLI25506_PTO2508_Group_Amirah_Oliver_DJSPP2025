# Podcast Explorer (React)

A modern podcast streaming application built with **React**, **Vite**, and **React Router**. The application allows users to discover podcasts, view detailed information about each show, listen to episodes through a global media player, save favourite episodes, and personalise the interface with light and dark themes.

## Live Demo

**Application:** *[MY PROJECT](https://amioli-25506-pto-2508-group-amirah-coral.vercel.app/)*

---

# Project Overview

Podcast Explorer was developed to create a richer podcast browsing experience using React. The application communicates with a public podcast API and provides an intuitive interface for finding, listening to, and managing podcast content.

The project includes:

* A searchable podcast catalogue
* Genre filtering and sorting options
* Individual podcast information pages
* A global audio player available throughout the app
* Favourite episode management with browser storage
* Theme switching between light and dark modes
* Deployment using Vercel with proper React routing support

---

# Project Goals

The main objectives of this project were to:

* Develop a reusable global audio player that remains active while navigating the site.
* Allow users to save and manage favourite podcast episodes.
* Display recommended podcasts on the homepage.
* Provide both light and dark viewing modes.
* Build a responsive application suitable for desktop and mobile devices.
* Deploy the application successfully with client-side routing configured correctly.

---

# Features

## Podcast Discovery

Users can easily browse podcasts by:

* Searching for shows using their titles
* Filtering podcasts by genre
* Sorting results alphabetically or by recently updated shows
* Viewing podcasts across multiple pages
* Browsing featured recommendations on the homepage

---

## Podcast Information

Selecting a podcast opens a dedicated details page where users can:

* View podcast artwork and descriptions
* Read podcast information and metadata
* Browse available seasons
* Expand seasons to see individual episodes
* Play episodes directly
* Add or remove episodes from favourites

---

## Global Audio Player

The application includes a persistent audio player that:

* Continues playing while navigating between pages
* Supports built-in playback controls
* Allows users to move to previous or next episodes
* Can be closed whenever required
* Warns users before leaving the page while audio is still playing

---

## Favourite Episodes

Users can manage their favourite episodes by:

* Saving episodes with a single click
* Viewing a running favourites counter
* Accessing all favourites from a dedicated page
* Organising favourites by podcast
* Recording when each favourite was added
* Keeping favourites saved using localStorage

---

## User Interface

To improve usability, the application provides:

* Light and dark theme support
* Theme preference saved automatically
* Responsive layouts for different screen sizes
* Loading indicators and error handling
* Reusable React components styled with CSS Modules

---

# Technologies Used

* React
* JavaScript
* Vite
* React Router
* CSS Modules
* React Context API
* localStorage
* ESLint
* Vercel

---

# API

The application retrieves podcast information from the following public endpoints:

* https://podcast-api.netlify.app/shows
* https://podcast-api.netlify.app/id/:showId
* https://podcast-api.netlify.app/genre/:genreId

---

# Installation

## Requirements

Before running the project, install:

* Node.js
* npm

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

After the server starts, open the local Vite URL displayed in the terminal.

---

# Application Routes

| Route        | Purpose                                                           |
| ------------ | ----------------------------------------------------------------- |
| `/`          | Homepage displaying podcasts, search, filters and recommendations |
| `/show/:id`  | Detailed information for a selected podcast                       |
| `/favorites` | Displays all saved favourite episodes                             |

---

# Folder Structure

```text
src/
├── api/
├── assets/
├── components/
│   ├── Filters/
│   ├── Podcasts/
│   └── UI/
├── context/
├── pages/
└── utils/
```

---

# State Management

The application makes use of React Context to manage shared data.

**Podcast Context**

Responsible for:

* Podcast retrieval
* Search functionality
* Genre filtering
* Sorting
* Pagination
* Favourite episode management

**Audio Player Context**

Responsible for:

* Global audio playback
* Episode queue management
* Playback persistence across pages
* Exit confirmation while media is playing

Browser storage (localStorage) is used to remember:

* User theme preference
* Favourite episodes

---

# Deployment

The application is hosted on **Vercel**.

Since React Router uses client-side routing, a rewrite rule is included inside **vercel.json** to ensure direct navigation to dynamic routes functions correctly after deployment.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

# Author

**Amirah Oliver**

---

# Contact

* LinkedIn :  linkedin.com/in/amirah-oliver-50360a317
* Email: amirah.oliver16@gmail.com

---

# Additional Information

This project was created as part of a React development portfolio to demonstrate modern front-end development practices. It showcases reusable components, efficient state management with React Context, responsive design principles, API integration, persistent browser storage, and deployment to a production environment.
