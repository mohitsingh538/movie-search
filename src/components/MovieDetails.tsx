import React from "react";
import { useParams } from "react-router-dom";
import { useMovieData } from "../hooks/useMovieData";
import { useFavorite } from "../hooks/useFavorite";
import { useAlert } from "./Alert";
import MovieInfo from "./movie-details/MovieInfo";
import MoviePoster from "./movie-details/MovieImage";
import MovieRow from "./MovieRow";
import ActionButtons from "./movie-details/ActionButtons";

const MovieDetails: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const movieId = id || "";
    const {movie, similarMovies, loading} = useMovieData(movieId);
    const {showAlert} = useAlert();
    const {isFavorite, toggleFavorite} = useFavorite(movie);

    if (!id) {
        return <div className="p-6 text-white">No movie ID provided.</div>;
    }

    if (loading) {
        return <div className="p-6 text-white">Loading movie details...</div>;
    }

    if (!movie) {
        return <div className="p-6 text-white">Movie not found.</div>;
    }

    const sliderMovies = similarMovies.slice(5);

    const handleWatchNowClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        const actionText =
            event.currentTarget.querySelector("span")?.textContent || "this action";
        showAlert(`This is a demo project. Can't perform action: ${actionText}`);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
                <MovieInfo movie={movie}/>
                <MoviePoster poster={movie.Poster} title={movie.Title}/>
            </div>
            <div className="container mx-auto px-4">
                <ActionButtons
                    isFavorite={isFavorite}
                    onWatchClick={handleWatchNowClick}
                    onFavoriteToggle={toggleFavorite}
                />
            </div>
            {similarMovies.length > 0 && (
                <div className="container mx-auto px-4 py-12">
                    <hr className="mb-8"/>
                    {sliderMovies.length > 0 && (
                        <MovieRow title="Similar Movies" movies={sliderMovies}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default MovieDetails;
