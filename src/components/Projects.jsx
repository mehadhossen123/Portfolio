import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'The Book Haven',
            description: 'The Book Haven is a MERN Stack online bookstore with a clean UI, secure authentication, role-based access, and a fast, scalable backend for smooth book browsing, cart management, and...',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPLmTB4neNV7ItC1JoGeLTzIUzvhl7AANXSCshYb8tL8FtoNuDh-XPk_Q-Xm2cy4vJG7C8tadG80Jo78AuPMbo2nbKUux0fCWMc7xi7aXERaBa9UeHxXyhDtXLYbqiN1IjLQ-FwWNbeMg0oBUgOo1Yv4xjHu5A0DTv0pbbm7jelFxcqvwqLIdpPJKkj39t6erMQ71etC0ENFKyYQ4biLwJWZB_VKltvYAvSMGZa1umWK7ag5E8v6mOPKfnuiqTzHkeDD2RHtC7vAI',
            tags: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Firebase', 'Node.js', 'MongoDB', 'Express'],
        },
        {
            title: 'Toy Topia',
            description: 'Toy Topia is a React-based toy marketplace featuring a clean and responsive UI that allows users to browse toys, view details, and interact with an intuitive shopping experience. Built with...',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl8DtV6sS12B8-RAH_mNx4X59IEL3KH_2kbPkIt-jJNkIRw2Ey3jLUmFm-MSe9mI9ufK72Zd5LUfjNvjjWgUE02WiBQ2VhE12l0hf4NX3Lk87H2VYU1E4Q9C4r7HhQSViZRTXCNoAbPkeqgDPkir574oUg85IQRwir6fL-qkZW2QjrBbYcdpWgfF7rCS4LKwOOgn14BbRv9CvaqmV7NYVlWWxvf5LcJMxZP8QAPRFtCYie7wjVhSyRToKXL0o_rCA5qJtS5KE8Tdg',
            tags: ['React JS', 'HTML', 'CSS', 'JavaScript', 'API', 'Firebase'],
        },
        {
            title: 'The Dragon News',
            description: 'Dragon News is a React-based news platform that delivers real-time articles through a clean, modern, and responsive interface. Users can browse categories, read detailed news stories, and...',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSraKTOUAcZWRSAdKK1qzFX1X_1kmjm3tKgtehpvMsfaWVVo_hTERLbTmv5y0ha9fI2MEJ0rVvXwbjfApAIDkCnU5rP0Cg3t41Dgg2siyx53XWCL-sZWcMaFD3thCcM9DQToV6XIeYj0hZm1lXBNhQPx6bF-fpi-JF1-zBh6-hK1-VRDCb9uWTbBHCc4Ap6AAuN_GszG9wSQ-GZ-A-zBwkH9gDXjM8xgtwAEWj0WDiY3dYYtMJzoAXIKrwRBmmuaOCuaxf03FV38A',
            tags: ['React JS', 'API', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
        },
    ];

    return (
        <div id="projects" className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
                    PROJECTS
                </h1>
                <div className="inline-block w-20 h-1.5 bg-primary rounded-full"></div>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
                    A showcase of the projects I have worked on, highlighting my skills and experience in various
                    technologies
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
                {projects.map((project, index) => (
                    <div key={index}
                        className="bg-white/5 dark:bg-gray-900/40 border border-gray-200/10 dark:border-white/10 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10">
                        <div className="mb-6 overflow-hidden rounded-md">
                            <img alt={`Screenshot of '${project.title}' project.`}
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                                src={project.image} />
                        </div>
                        <div className="flex flex-col flex-grow">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag}
                                        className="bg-primary/10 text-primary/80 text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
