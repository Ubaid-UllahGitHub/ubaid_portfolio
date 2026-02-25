import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import frontend from "../assets/frontedn.png";
import backend from "../assets/Backend.png";

const AboutSection = () => {
    const staticText = "I’m a 'software engineer' ";

    // Main bio text
    const mainAnimatedText = "Specializing in React and Tailwind CSS to craft stunning interfaces, backed by Node.js, MongoDB, and Firebase. From custom SaaS platforms to versatile CMS ecosystems like WordPress, Wix and Shopify, I build the engine and the exterior.";

    // Sub text (the accented part)
    const subText = " Over the past few years, I've worked on diverse projects—ranging from productivity tools to complex enterprise systems.";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.012, // Slightly faster for longer text
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, display: "none" },
        visible: {
            opacity: 1,
            display: "inline"
        },
    };

    const cursorVariants = {
        blinking: {
            opacity: [0, 1, 0],
            transition: {
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };

    return (
        <section className="
            relative w-full min-h-screen overflow-hidden font-inter bg-white py-24 flex items-center 
            rounded-none md:rounded-t-[40px] 
            shadow-[0_-30px_60px_10px_rgba(0,0,0,0.15)] z-30
        ">
            {/* Background Image */}
            <img
                src="https://framerusercontent.com/images/aW15DKPBGhvW5VE4OjIFneHNJL0.svg"
                className="absolute inset-0 w-full h-full object-cover object-top"
                alt=""
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-start"
            >
                {/* About Me Tag */}
                <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-lg shadow-lg mb-8 border border-gray-700">
                    <Zap size={14} className="fill-white" />
                    <span className="text-sm font-medium">About Me</span>
                </div>

                <div className="relative w-full">
                    {/* Combined Text Container */}
                    <div className="text-2xl md:text-3xl lg:text-3xl leading-tight max-w-4xl tracking-tight">

                        {/* 1. Static Intro */}
                        <span className="text-black font-600">
                            {staticText}
                        </span>

                        {/* 2. Main Animated Text (Black) */}
                        <span className="text-black">
                            {mainAnimatedText.split("").map((char, index) => (
                                <motion.span key={`main-${index}`} variants={letterVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>


                        {/* 3. Sub Animated Text (Accent Color) */}
                        <span className="text-accent/40 font-medium">
                            {subText.split("").map((char, index) => (
                                <motion.span key={`sub-${index}`} variants={letterVariants}>
                                    {char}
                                </motion.span>
                            ))}
                        </span>

                        {/* 4. The Unified Blinking Cursor */}
                        <motion.span
                            variants={cursorVariants}
                            animate="blinking"
                            className="inline-block ml-1 w-[3px] h-[0.9em] bg-accent translate-y-1" />
                    </div>

                    {/* Right Side Floating Images */}
                    <div className="hidden lg:block lg:col-span-3 relative">
                        <motion.img
                            whileHover={{ y: -10, rotate: 5, scale: 1.05 }}
                            src={frontend}
                            className="absolute bottom-40 right-16 w-28 opacity-90"
                        />
                        <motion.img
                            whileHover={{ y: -10, rotate: -5, scale: 1.05 }}
                            src={backend}
                            className="absolute rounded-2xl z-10 opacity-90 bottom-20 right-2 w-28"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;