import React from 'react';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
            <header className="max-w-lg p-5">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Hi, I'm Vishnu Nair, a Software Developer specializing in full-stack development and AI-driven solutions.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        View My Work
                    </button>
                    <button className="px-5 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                        Contact Me
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Home;
