import {useEffect, useState} from "react";
import axios from "axios";
import { Movie } from "../types/Movie";

export const useMovieData = (id: string) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get<Movie[]>("/data.json")
            .then((res) => {
                const found = res.data.find((m) => m.imdbID === id);
                setMovie(found || null);

                if (found && found.Genre) {
                    const genres = found.Genre.split(",").map((g) => g.trim());
                    const similar = res.data.filter((m) => {
                        if (m.imdbID === found.imdbID || !m.Genre) return false;
                        const movieGenres = m.Genre.split(",").map((g) => g.trim());
                        return movieGenres.some((genre) => genres.includes(genre));
                    });
                    setSimilarMovies(similar);
                }
            })
            .catch((err) => console.error("Error fetching movie:", err))
            .finally(() => setLoading(false));
    }, [id]);

    return {movie, similarMovies, loading};
};
