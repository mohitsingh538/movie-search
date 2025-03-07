import React from "react";
import { Movie } from "../types/Movie";
import Banner from "./Banner";
import MovieRow from "./MovieRow";

interface HomeProps {
    trendingMovies: Movie[];
    popularMovies: Movie[];
    continueWatching: Movie[];
    categories: string[];
}

const Home: React.FC<HomeProps> = ({
                                       trendingMovies,
                                       popularMovies,
                                       continueWatching,
                                       categories,
                                   }) => {

    return (
        <div className="bg-gray-900 text-white">
            {/* Latest Movie banner */}
            <Banner/>

            {/* Category Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 py-4 bg-gray-800">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-yellow-500 hover:text-black transition"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Movie Rows */}
            <div className="container mx-auto py-8">
                <MovieRow title="Trending Movies" movies={trendingMovies}/>
                <MovieRow title="All Popular" movies={popularMovies}/>
                <MovieRow title="Binge Watch" movies={continueWatching}/>
            </div>
        </div>
    );
};

export default Home;
