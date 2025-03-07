import React from "react";
import { useAlert } from "./Alert";

const Banner: React.FC = () => {

    const {showAlert} = useAlert();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const actionText = event.currentTarget.querySelector("span")?.textContent || "this action";
        showAlert(`This is a demo project. Can't perform action: ${actionText}`);
    };

    return (
        <div
            className="relative min-h-[50vh] w-full bg-cover bg-center flex-none"
            style={{
                backgroundImage:
                    "url('https://images7.alphacoders.com/674/thumb-1920-674273.jpg')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"/>

            {/* Banner */}
            <div className="container mx-auto px-4 relative z-10 py-8">
                <h1 className="text-4xl font-bold mb-4">Monsters, Inc.</h1>
                <p className="max-w-md mb-6">
                    Animators that redefined the world of Monstropolis, where monsters generate
                    their city's power by scaring children at night.
                </p>
                <div className="flex space-x-4">
                    <button
                        onClick={handleClick}
                        className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition flex items-center space-x-2">
                        <i className="fas fa-play-circle"></i>
                        <span>Watch Now</span>
                    </button>
                    <button
                        onClick={handleClick}
                        className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400 transition flex items-center space-x-2">
                        <i className="fas fa-info-circle"></i>
                        <span>Details</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
