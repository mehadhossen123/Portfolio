import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

const About = () => {
    // 3D Tilt Logic
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * 32.5;
        const mouseY = (e.clientY - rect.top) * 32.5;

        const rX = (mouseY / height - 32.5 / 2) * -1;
        const rY = (mouseX / width - 32.5 / 2);

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Word Reveal Logic
    const Paragraph = ({ text, className }) => {
        const words = text.split(" ");
        return (
            <p className={className}>
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: i * 0.02,
                            ease: "easeOut"
                        }}
                        className="inline-block mr-1"
                    >
                        {word}
                    </motion.span>
                ))}
            </p>
        );
    };

    return (
        <div id="about" className="relative flex-grow container mx-auto max-w-7xl flex items-center justify-center py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Floating Background Particles */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
                animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full z-10">
                {/* 3D Tilt Image Container */}
                <motion.div
                    className="hidden lg:flex flex-shrink-0 lg:w-1/3 justify-center perspective-1000"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    ref={ref}
                    style={{ transformStyle: "preserve-3d", transform }}
                >
                    <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] transition-shadow duration-300 hover:shadow-2xl rounded-full">
                        <div className="absolute inset-0 rounded-full border-2 border-primary image-glow" style={{ transform: "translateZ(20px)" }}></div>
                        <img alt="A portrait of Salman Hossain in a dark room with blue fairy lights in the background."
                            className="relative w-full h-full object-cover rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjZXYhpecEeLcxHWh5mLV01DrASKvccyW9JHrmEpHG5sZQ4Due-hxHxE7IEClWNJHfgNJ7RG3XZKw7mqmW44aDRJK_Z0j7xdaOeiXD_Fld-tOGNEGIwLAph1fEH6Fj2jPETXbKv8tKF8wk_KMhZBUJKqJOgI2kc6D4LUisM7X6q7iS1UqloQHFT3sorGi5R96srp-1jroMLokwLdx6LAfACUtDaoicx0sOJXptBrfaogqv0HcQKnq8fnyT7PmF_jL7qAGuQ9rfw4"
                            style={{ transform: "translateZ(50px)" }}
                        />
                    </div>
                </motion.div>

                <div className="text-center lg:text-left lg:w-2/3">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient">Me</span>
                    </motion.h1>

                    <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                        <Paragraph
                            text="Hello! I'm Salman Hossain, a passionate and detail-oriented developer with a keen eye for design and a love for creating intuitive, beautiful user interfaces. My journey into the world of programming began with a fascination for how technology can be used to create engaging and seamless digital experiences."
                        />
                        <Paragraph
                            text="With a strong foundation in front-end technologies, I specialize in crafting UI-focused applications that not only function flawlessly but also provide a delightful user experience. I believe that the best products are born from a perfect blend of robust code and thoughtful design."
                        />
                        <Paragraph
                            text="I'm constantly exploring new tools and techniques to push the boundaries of what's possible on the web. My goal is to leverage my skills to build innovative solutions that solve real-world problems and leave a lasting positive impact."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
