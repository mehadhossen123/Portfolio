import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    CONTACT ME
                </h1>
                <div className="inline-block w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div
                    className="bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg p-8 backdrop-blur-sm">
                    <form action="#" className="space-y-6" method="POST">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="name">Name</label>
                            <input
                                className="w-full bg-gray-900/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                                id="name" name="name" placeholder="Your Name" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="email">Email</label>
                            <input
                                className="w-full bg-gray-900/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                                id="email" name="email" placeholder="your@email.com" type="email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2" htmlFor="message">Message</label>
                            <textarea
                                className="w-full bg-gray-900/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                                id="message" name="message" placeholder="Let's build something amazing together..."
                                rows="5"></textarea>
                        </div>
                        <div>
                            <button
                                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg hover:shadow-glow-primary transition-all duration-300"
                                type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col justify-between space-y-8">
                    <div
                        className="bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg p-8 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:shadow-glow-primary transition-all duration-300">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Email</h3>
                                <a className="text-gray-400 hover:text-primary transition-colors duration-300"
                                    href="mailto:salmanh.dev@gmail.com">salmanh.dev@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg p-8 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
                        <div className="flex items-center justify-center space-x-6">
                            <a className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(160,32,240,0.7)]"
                                href="#">
                                <svg aria-hidden="true" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                                        fillRule="evenodd"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(160,32,240,0.7)]"
                                href="#">
                                <svg aria-hidden="true" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
