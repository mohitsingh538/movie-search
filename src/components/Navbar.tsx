import React, {useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types/Movie";
import axios from "axios";

const Navbar: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        axios
            .get<Movie[]>("/data.json")
            .then((res) => {
                setMovies(res.data);
            })
            .catch((err) => console.error("Error fetching movies:", err));
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === "") {
            setShowDropdown(false);
            setFilteredMovies([]);
            return;
        }

        const results = movies.filter((movie) =>
            movie.Title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredMovies(results);
        setShowDropdown(results.length > 0);
    };

    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Brand / Logo */}
                <Link to="/" className="text-2xl font-bold text-yellow-400">
                    Movie Search
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link to="/movies" className="hover:text-yellow-400 transition">
                        Movies
                    </Link>
                    <Link to="/series" className="hover:text-yellow-400 transition">
                        Series
                    </Link>
                    <Link to="/kids" className="hover:text-yellow-400 transition">
                        Kids
                    </Link>
                </nav>

                {/* Right side (Search / Favorites) */}
                <div className="flex items-center space-x-4">
                    {/* Favorites */}
                    <Link to="/favorites" className="hover:text-yellow-400 transition">
                        Favorites
                    </Link>

                    {/* Search bar + dropdown */}
                    <div className="relative" ref={wrapperRef}>
                        <input
                            type="text"
                            className="rounded bg-gray-800 text-white px-3 py-1 focus:outline-none"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {showDropdown && filteredMovies.length > 0 && (
                            <div className="absolute left-0 right-0 mt-2 bg-white text-black rounded shadow-lg -z-10 + z-50">
                                {filteredMovies.map((movie) => (
                                    <Link
                                        key={movie.imdbID}
                                        to={`/movie/${movie.imdbID}`}
                                        className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => {
                                            setSearchTerm("");
                                            setFilteredMovies([]);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        <img
                                            src={movie.Poster}
                                            alt={movie.Title}
                                            className="w-10 h-14 object-cover rounded mr-3"
                                        />
                                        <div>
                                            <p className="font-semibold">{movie.Title}</p>
                                            <p className="text-sm text-gray-600">{movie.Genre}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
