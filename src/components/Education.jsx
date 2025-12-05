import React from 'react';

const Education = () => {
    return (
        <div id="education" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    EDUCATION
                </h1>
                <div className="inline-block w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    My academic background and qualifications.
                </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="relative pl-8 sm:pl-12 py-4 group">
                    <div
                        className="absolute left-2 sm:left-4 top-0 h-full w-0.5 bg-gray-200/20 dark:bg-white/10 group-hover:bg-primary/50 transition-colors duration-300">
                    </div>
                    <div
                        className="absolute left-0 sm:left-1.5 top-5 -ml-2.5 w-5 h-5 bg-background-dark border-2 border-gray-200/30 dark:border-white/20 rounded-full group-hover:border-primary transition-colors duration-300">
                    </div>
                    <div
                        className="p-6 bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
                        <p className="text-sm font-medium text-primary mb-1">2023 - Present</p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">B.Sc in Computer Science &amp;
                            Engineering</h2>
                        <p className="text-gray-500 dark:text-gray-400">International Standard University, Dhaka</p>
                    </div>
                </div>
                <div className="relative pl-8 sm:pl-12 py-4 group">
                    <div
                        className="absolute left-2 sm:left-4 top-0 h-full w-0.5 bg-gray-200/20 dark:bg-white/10 group-hover:bg-primary/50 transition-colors duration-300">
                    </div>
                    <div
                        className="absolute left-0 sm:left-1.5 top-5 -ml-2.5 w-5 h-5 bg-background-dark border-2 border-gray-200/30 dark:border-white/20 rounded-full group-hover:border-primary transition-colors duration-300">
                    </div>
                    <div
                        className="p-6 bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg hover:border-primary/50 hover:shadow-primary/10 transition-all duration-300">
                        <p className="text-sm font-medium text-primary mb-1">2019 - 2021</p>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Higher Secondary Certificate (HSC)
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-3">Dr. Mahbubur Rahman Mollah College, Dhaka</p>
                        <span
                            className="inline-block bg-primary/10 text-primary/80 text-sm font-medium px-3 py-1 rounded-full">GPA:
                            5.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
