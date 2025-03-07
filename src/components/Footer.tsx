import React from "react";

interface FooterProps {
    categories: string[];
}

const Footer: React.FC<FooterProps> = ({categories}) => {
    const groups: string[][] = [];
    for (let i = 0; i < categories.length; i += 5) {
        groups.push(categories.slice(i, i + 5));
    }

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Category Section */}
                <div className="flex flex-wrap justify-between w-full">
                    {groups.map((group, index) => (
                        <div key={index} className="px-4 mb-4">
                            <ul>
                                {group.map((cat, idx) => (
                                    <li
                                        key={idx}
                                        className="mb-2 hover:text-yellow-400 transition"
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright Notice */}
                <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                    © {new Date().getFullYear()} Movie Search. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
