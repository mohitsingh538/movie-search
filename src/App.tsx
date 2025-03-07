import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import { Movie } from "./types/Movie";
import Footer from "./components/Footer";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios
            .get<Movie[]>("/data.json")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => console.error("Error loading movies:", err));
    }, []);

    const uniqueCategories = useMemo(() => {
        const genresSet = new Set<string>();

        movies.forEach((movie) => {
            if (movie.Genre) {
                movie.Genre.split(",")
                    .map((g) => g.trim())
                    .filter((g) => g !== "N/A") // Exclude "N/A"
                    .forEach((g) => genresSet.add(g));
            }
        });

        return Array.from(genresSet);
    }, [movies]);

    const trendingMovies = movies.slice(0, 10);
    const popularMovies = movies.slice(10, 20);
    const continueWatching = movies.slice(20, 30);

    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
                <Navbar/>
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    trendingMovies={trendingMovies}
                                    popularMovies={popularMovies}
                                    continueWatching={continueWatching}
                                    categories={uniqueCategories.slice(0, 10)}
                                />
                            }
                        />
                        <Route path="/movie/:id" element={<MovieDetails/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                    </Routes>
                </main>
                <Footer categories={uniqueCategories}/>
            </div>
        </Router>
    );
}

export default App;
