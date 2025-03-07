import React from "react";
import { Movie } from "../types/Movie";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
    // 1) Safely access fields
    const descriptionBody = movie.Plot || "";
    const ratingValue = movie.imdbRating || "N/A";

    // 2) Title constraints
    const MAX_TITLE_LENGTH = 40; // Truncate if > 40 chars

    // 3) Dynamic snippet length
    const SHORT_TITLE_THRESHOLD = 25;      // Titles shorter than 25 chars
    const LONG_SNIPPET_LENGTH = 120;       // Showing more description for short titles
    const DEFAULT_SNIPPET_LENGTH = 80;     // Otherwise, showing 80 chars

    const snippetLength =
        movie.Title.length < SHORT_TITLE_THRESHOLD
            ? LONG_SNIPPET_LENGTH
            : DEFAULT_SNIPPET_LENGTH;

    const truncatedDescription =
        descriptionBody.slice(0, snippetLength) +
        (descriptionBody.length > snippetLength ? "..." : "");

    // 4) Truncating long titles
    const displayTitle =
        movie.Title.length > MAX_TITLE_LENGTH
            ? movie.Title.slice(0, MAX_TITLE_LENGTH) + "..."
            : movie.Title;

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow
                    flex flex-col h-full">
            {/* Image */}
            <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-48 object-cover"
            />

            {/* Main Content */}
            <div className="p-4 flex-grow">
                <h2 className="text-lg font-bold text-yellow-400">
                    {displayTitle}
                </h2>
                <p className="text-sm text-gray-300 mt-2">
                    {truncatedDescription}
                </p>
            </div>

            {/* Footer (Rating, etc.) */}
            <div className="p-4 border-t border-gray-700 flex items-center">
                <span className="text-yellow-400 font-semibold">{ratingValue}</span>
                <span className="text-sm text-white ml-1">⭐</span>
            </div>
        </div>
    );
};

export default MovieCard;
