import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinksRef = useRef(null);

    useEffect(() => {
        if (navLinksRef.current) {
            const links = navLinksRef.current.querySelectorAll('a');

            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    gsap.to(link, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "power2.out",
                        color: "#3b82f6" // Example primary color, adjust if needed based on theme
                    });
                });

                link.addEventListener('mouseleave', () => {
                    gsap.to(link, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                        color: "" // Revert to original
                    });
                });
            });
        }
    }, []);

    const headerVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.header
            className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm py-6"
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <nav className="container mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8">
                <motion.a
                    className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
                    href="#"
                    variants={itemVariants}
                >
                    <span className="text-primary">&lt;</span>Mehad<span
                        className="font-normal text-gray-500 dark:text-gray-400">/</span>Hossen<span
                            className="text-primary">&gt;</span>
                </motion.a>

                <motion.div
                    className="hidden md:flex items-center space-x-8"
                    ref={navLinksRef}
                    variants={itemVariants}
                >
                    <a className="text-primary font-semibold transition-colors" href="#">Home</a>
                    <a className="hover:text-primary transition-colors" href="#about">About</a>
                    <a className="hover:text-primary transition-colors" href="#skills">Skills</a>
                    <a className="hover:text-primary transition-colors" href="#projects">Projects</a>
                    <a className="hover:text-primary transition-colors" href="#education">Education</a>
                    <a className="hover:text-primary transition-colors" href="#contact">Contact</a>
                </motion.div>

                <motion.div
                    className="hidden md:flex items-center space-x-6"
                    variants={itemVariants}
                >
                    <a aria-label="GitHub" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                        href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.218.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.745 0 .267.18.577.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                fillRule="evenodd"></path>
                        </svg>
                    </a>
                    <a aria-label="LinkedIn"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors" href="#">
                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                            </path>
                        </svg>
                    </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-900 dark:text-white focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="container mx-auto px-4 pt-2 pb-4 space-y-1">
                            <a
                                href="#about"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <a
                                href="#education"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Education
                            </a>
                            <a
                                href="#projects"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Projects
                            </a>
                            <a
                                href="#skills"
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Skills
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
