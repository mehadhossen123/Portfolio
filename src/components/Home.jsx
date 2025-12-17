import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </>
    );
};

export default Home;
