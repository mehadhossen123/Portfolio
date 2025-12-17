import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import img from ".././assets/profile.JPG";

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
      <div
        id="about"
        className="relative flex-grow container mx-auto max-w-7xl flex items-center justify-center py-12 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
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
              <div
                className="absolute inset-0 rounded-full border-2 border-primary image-glow"
                style={{ transform: "translateZ(20px)" }}
              ></div>
              <img
                alt="A portrait of Salman Hossain in a dark room with blue fairy lights in the background."
                className="relative w-full h-full object-cover rounded-full"
                src={img}
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 animate-gradient">
                Me
              </span>
            </motion.h1>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <Paragraph text="Hello! I'm Mehad, a passionate and dedicated web developer who enjoys turning ideas into interactive and user-friendly digital experiences. I love working on clean, modern interfaces and believe that good design plays a crucial role in effective software." />
              <Paragraph text="With a solid foundation in front-end development, I focus on building responsive and performance-driven applications using modern technologies. I always try to write clean, maintainable code while keeping the user experience at the center of every project." />
              <Paragraph text="I’m continuously learning and experimenting with new tools and frameworks to improve my skills. My goal is to create meaningful products that solve real problems and add real value through technology." />
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
