import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from '../utilits/animations';
import { Zap } from "lucide-react";
import uiux from "../assets/uiux.png";
import dev from "../assets/developer.png";
import frontend from "../assets/frontedn.png";
import backend from "../assets/Backend.png";
import saas from "../assets/SAAs.png";
import expert from "../assets/expert.png";
const AboutSection = () => {
    return (
        <section className="
    relative w-full min-h-screen overflow-hidden font-inter bg-white py-24 flex items-center
    rounded-t-[50px] md:rounded-t-[40px] 
    shadow-[0_-30px_60px_10px_rgba(0,0,0,0.15)] z-30
">
            {/* Background Image from Hero */}
            {/* Background Image */}
            <img
                decoding="async"
                src="https://framerusercontent.com/images/aW15DKPBGhvW5VE4OjIFneHNJL0.svg"
                className="absolute inset-0 w-full h-full object-cover object-top"
                alt=""
            />

            {/* 3D Shadows - Top Left and Top Right Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-start"
            >
                {/* About Me Tag */}
                <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-1.5 rounded-lg shadow-lg mb-8 border border-gray-700">
                    <Zap size={14} className="fill-white" />
                    <span className="text-sm font-medium">About Me</span>
                </div>

                <div className="relative w-full">
                    {/* Main Bio Text */}
                    <h2 className="text-2xl md:text-3xl lg:text-3xl text-black leading-tight mb-1 max-w-4xl">
                        I’m a software engineer Specializing in React and Tailwind CSS to craft stunning interfaces, backed by Node.js, MongoDB, and Firebase.
                        From custom SaaS platforms to versatile CMS ecosystems like WordPress, Wix and Shopify, I build the engine and the exterior.
                    </h2>

                    {/* Lower Dim Text - Using your Accent color with 40% opacity */}
                    <p className="text-2xl md:text-3xl lg:text-3xl font-medium text-accent/40 leading-[1.15] tracking-tight max-w-4xl">
                        Over the past few years, I've worked on diverse projects—ranging
                        from productivity tools to complex enterprise systems.
                    </p>

                    {/* Right Side Floating 3D Tags */}
                    {/* Right Side: 3D Floating Images */}
                    <div className="hidden lg:block lg:col-span-3 relative">
                        {/* Frontend Image - Top Layer */}
                        <motion.img
                            whileHover={{ y: -10, rotate: 5, scale: 1.05 }}
                            src={frontend}
                            alt="Frontend"
                            className="absolute bottom-40 right-16 w-28 opacity-90"
                        />

                        {/* Backend Image - Bottom Layer Offset */}
                        <motion.img
                            whileHover={{ y: -10, rotate: -5, scale: 1.05 }}
                            src={backend}
                            alt="Backend"
                            className="absolute rounded-2xl z-10
                                     -rotate-0 opacity-90 bottom-20 right-2 w-28"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;