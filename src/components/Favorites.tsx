import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";


export const useFavorite = (movie: Movie | null) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (movie) {
            const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
            setIsFavorite(favorites.some((fav: Movie) => fav.imdbID === movie.imdbID));
        }
    }, [movie]);

    const toggleFavorite = () => {
        if (!movie) return;
        const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (isFavorite) {
            const updated = favorites.filter((fav: Movie) => fav.imdbID !== movie.imdbID);
            localStorage.setItem("favorites", JSON.stringify(updated));
            setIsFavorite(false);
        } else {
            favorites.push(movie);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return {isFavorite, toggleFavorite};
};


const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(Array.isArray(stored) ? stored : []);
    }, []);

    const removeFavorite = (imdbID: string) => {
        const updated = favorites.filter((fav) => fav.imdbID !== imdbID);
        localStorage.setItem("favorites", JSON.stringify(updated));
        setFavorites(updated);
    };

    if (favorites.length === 0) {
        return (
            <div className="container mx-auto px-4 py-6 text-center text-white">
                <h2 className="text-2xl font-bold">No Favorites Yet</h2>
                <p className="mt-2">Add some movies to your favorites list!</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-6 text-white">
            <h2 className="text-2xl font-bold mb-10">Your Favorite Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((movie) => {
                    const movieId = movie.imdbID || "unknown";
                    return (
                        <div key={movieId} className="relative">
                            <Link to={`/movie/${movieId}`}>
                                <MovieCard movie={movie}/>
                            </Link>
                            <button
                                onClick={() => removeFavorite(movie.imdbID)}
                                className="absolute top-2 right-2 bg-red-600 text-white rounded px-2 py-1"
                            >
                                ✕
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;
