import React from "react";

interface RatingStarsProps {
    imdbRating: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({imdbRating}) => {
    const numericRating = parseFloat(imdbRating) || 0;
    const starCount = Math.round(numericRating / 2);
    const stars = Array.from({length: 5}, (_, i) => i < starCount);

    return (
        <div className="flex items-center">
            {stars.map((filled, i) =>
                filled ? (
                    <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                ) : (
                    <i key={i} className="far fa-star text-yellow-400 mr-1"></i>
                )
            )}
            <span className="ml-2 text-sm text-gray-300">IMDb: {imdbRating}/10</span>
        </div>
    );
};

export default RatingStars;
