import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

interface MovieRowProps {
    title: string;
    movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({title, movies}) => {
    return (
        <div className="mb-8 px-4">
            <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {movies.map((movie, idx) => {
                    const movieId = movie.imdbID || `movie-${idx}`;
                    return (
                        <Link key={movieId} to={`/movie/${movieId}`} className="w-40 flex-shrink-0">
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-40 h-60 object-cover rounded"
                            />
                            <p className="text-sm text-white mt-2">
                                {movie.Title.length > 20 ? movie.Title.slice(0, 20) + "..." : movie.Title}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default MovieRow;