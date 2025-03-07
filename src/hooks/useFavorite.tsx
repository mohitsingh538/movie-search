import {useEffect, useState} from "react";
import { Movie } from "../types/Movie";

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
