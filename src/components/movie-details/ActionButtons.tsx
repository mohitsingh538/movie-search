import React from "react";

interface ActionButtonsProps {
    isFavorite: boolean;
    onWatchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onFavoriteToggle: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
                                                         isFavorite,
                                                         onWatchClick,
                                                         onFavoriteToggle,
                                                     }) => {
    return (
        <div className="flex space-x-4 mb-8">
            <button
                onClick={onWatchClick}
                className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition flex items-center space-x-2"
            >
                <i className="fas fa-play-circle"></i>
                <span>Watch Now</span>
            </button>
            <button
                onClick={onFavoriteToggle}
                className={`px-4 py-2 rounded flex items-center space-x-2 transition-colors ${
                    isFavorite
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-yellow-400 hover:bg-yellow-500 text-black"
                }`}
            >
                {isFavorite ? (
                    <>
                        <i className="fas fa-trash-alt"></i>
                        <span>Remove from Favorites</span>
                    </>
                ) : (
                    <>
                        <i className="fas fa-heart"></i>
                        <span>Add to Favorites</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default ActionButtons;
