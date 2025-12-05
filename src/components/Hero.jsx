import React, { useEffect, useRef, useState } from 'react';
import img from '.././assets/profile.JPG';
import { motion, useAnimation, useInView } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
    const buttonRef = useRef(null);
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        "MERN Stack Developer",
        "Frontend Developer",
        "React Specialist",
        "UI/UX Enthusiast"
    ];

    useEffect(() => {
        const button = buttonRef.current;

        if (button) {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                });
            });

            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    boxShadow: "none"
                });
            });
        }
    }, []);

    // Typewriter Effect Logic
    useEffect(() => {
        const currentRole = roles[textIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const delay = isDeleting ? 0 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && displayText === '') {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % roles.length);
            } else {
                setDisplayText(
                    currentRole.substring(0, displayText.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex, roles]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    // Masked Reveal Variant
    const revealVariants = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.95] } // Custom bezier for smooth reveal
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div className="flex-grow container mx-auto max-w-7xl flex items-center px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full py-12 md:py-24">
                <motion.div
                    className="text-center lg:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Masked Reveal for "Hi, I am" */}
                    <div className="overflow-hidden mb-4">
                        <motion.h2 variants={revealVariants} className="text-4xl md:text-5xl font-semibold text-gray-700 dark:text-gray-300 block">
                            Hi, I am
                        </motion.h2>
                    </div>

                    {/* Masked Reveal for Name */}
                    <div className="overflow-hidden mb-6">
                        <motion.h1 variants={revealVariants} className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white block">
                            Mehad Hossen
                        </motion.h1>
                    </div>

                    {/* Typewriter Effect for Role */}
                    <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-10 h-[40px]">
                        I am a <span className="text-primary font-semibold">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </motion.p>

                    <motion.a
                        ref={buttonRef}
                        variants={itemVariants}
                        className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary/90 btn-glow transition-all duration-300 ease-in-out"
                        href="#"
                    >
                        DOWNLOAD CV
                    </motion.a>
                </motion.div>
                <motion.div
                    className="flex justify-center items-center"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <motion.div
                        className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="absolute inset-0 rounded-full border-2 border-primary image-glow animate-pulse">
                        </div>
                        <img alt="A portrait of Salman Hossain in a dark room with blue fairy lights in the background."
                            className="relative   object-cover rounded-full"
                            src={img} />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
