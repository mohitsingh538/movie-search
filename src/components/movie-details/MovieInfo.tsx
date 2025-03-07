import React from "react";
import { Movie } from "../../types/Movie";
import RatingStars from "../movie-details/RatingStars";

interface MovieInfoProps {
    movie: Movie;
}

const MovieInfo: React.FC<MovieInfoProps> = ({movie}) => {
    const {
        Title = "Untitled",
        Year = "N/A",
        Runtime = "N/A",
        Genre = "N/A",
        Plot = "No description available.",
        Director = "N/A",
        Writer = "N/A",
        Actors = "N/A",
        imdbRating = "0",
        BoxOffice = "N/A"
    } = movie;

    return (
        <div className="lg:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-2">{Title}</h1>
            <p className="text-gray-400 mb-4">
                {Runtime} | {Genre} | {Year}
            </p>
            <RatingStars imdbRating={imdbRating}/>
            <p className="text-gray-200 mt-10 mb-6 leading-relaxed">{Plot}</p>
            <div className="space-y-2">
                <p>
                    <span className="font-semibold">Director:</span>{" "}
                    <span className="text-gray-300">{Director}</span>
                </p>
                <p>
                    <span className="font-semibold">Writers:</span>{" "}
                    <span className="text-gray-300">{Writer}</span>
                </p>
                <p>
                    <span className="font-semibold">Cast:</span>{" "}
                    <span className="text-gray-300">{Actors}</span>
                </p>
                <p>
                    <span className="font-semibold">Earnings:</span>{" "}
                    <span className="text-gray-300">{BoxOffice}</span>
                </p>
            </div>
        </div>
    );
};

export default MovieInfo;
