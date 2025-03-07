import React from "react";

interface MoviePosterProps {
    poster: string;
    title: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({poster, title}) => {
    return (
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
                src={poster}
                alt={title}
                className="w-full max-w-md object-cover rounded-lg shadow-2xl"
            />
        </div>
    );
};

export default MoviePoster;
