import React from 'react';

const Hero = () => {
    return (
        <div className="flex-grow container mx-auto max-w-7xl flex items-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-12 md:py-24">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Hi, I am</h2>
                    <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-6">Salman Hossain</h1>
                    <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-10">I am a <span
                        className="text-primary font-semibold">UI Focused</span> Developer</p>
                    <a className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary/90 btn-glow transition-all duration-300 ease-in-out transform hover:scale-105"
                        href="#">
                        DOWNLOAD CV
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
                        <div className="absolute inset-0 rounded-full border-2 border-primary image-glow animate-pulse">
                        </div>
                        <img alt="A portrait of Salman Hossain in a dark room with blue fairy lights in the background."
                            className="relative w-full h-full object-cover rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjZXYhpecEeLcxHWh5mLV01DrASKvccyW9JHrmEpHG5sZQ4Due-hxHxE7IEClWNJHfgNJ7RG3XZKw7mqmW44aDRJK_Z0j7xdaOeiXD_Fld-tOGNEGIwLAph1fEH6Fj2jPETXbKv8tKF8wk_KMhZBUJKqJOgI2kc6D4LUisM7X6q7iS1UqloQHFT3sorGi5R96srp-1jroMLokwLdx6LAfACUtDaoicx0sOJXptBrfaogqv0HcQKnq8fnyT7PmF_jL7qAGuQ9rfw4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
