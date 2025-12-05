import React from 'react';

const About = () => {
    return (
        <div id="about" className="flex-grow container mx-auto max-w-7xl flex items-center justify-center py-12 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
                <div className="flex-shrink-0 lg:w-1/3 flex justify-center">
                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
                        <div className="absolute inset-0 rounded-full border-2 border-primary image-glow"></div>
                        <img alt="A portrait of Salman Hossain in a dark room with blue fairy lights in the background."
                            className="relative w-full h-full object-cover rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjZXYhpecEeLcxHWh5mLV01DrASKvccyW9JHrmEpHG5sZQ4Due-hxHxE7IEClWNJHfgNJ7RG3XZKw7mqmW44aDRJK_Z0j7xdaOeiXD_Fld-tOGNEGIwLAph1fEH6Fj2jPETXbKv8tKF8wk_KMhZBUJKqJOgI2kc6D4LUisM7X6q7iS1UqloQHFT3sorGi5R96srp-1jroMLokwLdx6LAfACUtDaoicx0sOJXptBrfaogqv0HcQKnq8fnyT7PmF_jL7qAGuQ9rfw4" />
                    </div>
                </div>
                <div className="text-center lg:text-left lg:w-2/3">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-primary text-glow">Me</span>
                    </h1>
                    <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                        <p>
                            Hello! I'm Salman Hossain, a passionate and detail-oriented developer with a keen eye for design
                            and a love for creating intuitive, beautiful user interfaces. My journey into the world of
                            programming began with a fascination for how technology can be used to create engaging and
                            seamless digital experiences.
                        </p>
                        <p>
                            With a strong foundation in front-end technologies, I specialize in crafting UI-focused
                            applications that not only function flawlessly but also provide a delightful user experience. I
                            believe that the best products are born from a perfect blend of robust code and thoughtful
                            design.
                        </p>
                        <p>
                            I'm constantly exploring new tools and techniques to push the boundaries of what's possible on
                            the web. My goal is to leverage my skills to build innovative solutions that solve real-world
                            problems and leave a lasting positive impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
