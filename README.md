# Movie Search App

A modern movie search web application built with React, TypeScript, and Tailwind CSS. The interface design is inspired by Amazon Prime Video but has its own unique style. Users can search for movies, view detailed information, and manage a list of favorite movies.

## Features

- **Movie Search**: Search for movies using a mock JSON data source.
- **Movie Details**: View detailed information about each movie, including title, release date, runtime, genre, plot, rating (with star icons), director, writer, and cast.
- **Favorites Management**: Add or remove movies from your favorites. Favorites are stored in `localStorage` for persistence.
- **Pagination & Movie Rows**: Movies are displayed in well-organized, responsive rows with pagination for better browsing.
- **Responsive Design**: The app is designed to work seamlessly on desktop, tablet, and mobile.
- **Global Alert System**: A reusable global alert system (using React Context) lets you display demo alerts anywhere in the app.
- **Consistent Layout**: A centralized layout with a Navbar, Banner, main content area, and Footer ensures uniform spacing and alignment across pages.

## Tech Stack

- **React** with **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for data fetching
- **LocalStorage** for persistent favorites
- **Font Awesome** for icons

# Project Structure

```plaintext
.
├── public
│   ├── data.json
│   ├── index.html
│   └── robots.txt
├── src
│   ├── components
│   │   ├── movie-details
│   │   │   ├── ActionButtons.tsx
│   │   │   ├── MovieImage.tsx
│   │   │   ├── MovieInfo.tsx
│   │   │   └── RatingStars.tsx
│   │   ├── Alert.tsx
│   │   ├── Banner.tsx
│   │   ├── Favorites.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieDetails.tsx
│   │   ├── MovieRow.tsx
│   │   └── Navbar.tsx
│   ├── hooks
│   │   ├── useFavorite.tsx
│   │   └── useMovieData.tsx
│   ├── types
│   │   └── Movie.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── package.json
├── postcss.config.js
├── readme.txt
├── tailwind.config.js
└── tsconfig.json
```

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** (or Yarn)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mohitsingh538/movie-search.git .
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Tailwind CSS:**

   Tailwind CSS is already set up with the necessary configuration in `tailwind.config.js` and imported in `src/index.css`.

4. **Mock Data:**

   The movie data is provided in `public/data.json`. Modify this file if needed.

## Running the App

To start the development server, run:

```bash
npm start
# or
yarn start
```

The app will be available at http://localhost:3000.

## Production Build

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

## Global Alert System

The app includes a global alert system using React Context. Instead of managing alert state in every component, simply use the `useAlert` hook to trigger an alert from anywhere in the app. For example:

```tsx
import { useAlert } from "./AlertContext";

const SomeComponent = () => {
  const { showAlert } = useAlert();

  const handleClick = () => {
    showAlert("This is a demo project. Can't perform action: Watch Now");
  };

  return (
    <button onClick={handleClick}>Watch Now</button>
  );
};
```

## Layout & Design

- **Navbar**: A top navigation bar with links and a logo.
- **Banner**: A hero banner with a background image, title, description, and action buttons (with icons).
- **Content Area**: Pages like Home, Movie Details, and Favorites are rendered within a centralized layout (`container mx-auto px-4 py-6`).
- **Footer**: Displays unique movie categories (grouped into columns of 5) and a copyright notice.
- **Inspired by Amazon Prime**: The interface design was inspired by Amazon Prime Video, offering a modern, streamlined look while incorporating unique visual elements.


## Screenshots

### Home Page
![Home Page)](https://i.postimg.cc/N0B69vJP/screencapture-localhost-3000-2025-03-07-04-21-46.png)

### Movie Details Page
![Movie Details)](https://i.postimg.cc/WbRPksrn/screencapture-localhost-3000-movie-tt3098812-2025-03-07-04-22-12.png)


## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **Amazon Prime Inspiration**: The interface was inspired by the sleek and user-friendly design of Amazon Prime Video.
- **Font Awesome** for icons.
- **Axios** for HTTP requests.
- **Tailwind CSS** for rapid styling and responsiveness.

