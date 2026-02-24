import React from "react";
import { motion } from "framer-motion"; // Import motion
import { Play } from "lucide-react";
import { fadeInUp, zoomIn, fadeIn } from '../utilits/animations';
import heroImage from "../assets/mebanner1.png";
import uiux from "../assets/uiux.png";
import dev from "../assets/developer.png";
import frontend from "../assets/frontedn.png";
import backend from "../assets/Backend.png";
import saas from "../assets/SAAs.png";
import expert from "../assets/expert.png";
const Hero = () => {
    // Animation variants for text (Fade in from bottom)


    return (
        <section className="relative w-full h-auto overflow-hidden font-inter pb-0">
            {/* Background Image */}
            <img
                decoding="async"
                src="https://framerusercontent.com/images/aW15DKPBGhvW5VE4OjIFneHNJL0.svg"
                className="absolute inset-0 w-full h-full object-cover object-top"
                alt=""
            />

            {/* Content Container */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 pt-32 sm:pt-40 text-center flex flex-col items-center gap-8">
                {/* Catalogue CTA - Fades in from bottom */}
                <div
                    className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-white rounded-full px-4 py-2 shadow-sm text-center">
                    <span className="w-5 h-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-full h-full fill-accent">
                            <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94l-51.65,19-19,51.61a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88l51.65-19,19-51.61a15.92,15.92,0,0,1,29.88,0l19,51.65,51.61,19A15.78,15.78,0,0,1,208,144Z" />
                        </svg>
                    </span>
                    <span className="text-sm text-brand-body">Build Better Software, Seamlessly Together
                    </span>
                    <a
                        href="#"
                        className="flex items-center gap-1 text-sm text-accent underline whitespace-nowrap hover:opacity-80 transition"
                    >
                        See catalogue
                        <span className="w-4 h-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="w-full h-full fill-accent"
                            >
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Heading - Animated */}
                <h1

                    className="big-heading text-center color"
                >
                    Clean code. Scalable apps. Reliable delivery.
                </h1>

                {/* Paragraph - Animated with slight delay */}
                <p
                    className="text-lg text-brand-body max-w-2xl"
                >
                    I’m a software engineer who turns complex ideas into performant, user-friendly web applications.
                </p>

                {/* Buttons - Animated */}
                <div
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="flex items-center gap-2 rounded-full px-4 py-2 text-md font-medium bg-button-soft text-brand-heading shadow-button-soft hover:shadow-md transition">
                        <Play size={16} /> See how it works
                    </button>
                    <button className="
  rounded-full px-6 py-3 text-white font-medium
  bg-gradient-to-r from-accent via-accent/90 to-accent/70
  transition-all duration-300
  shadow-[0_10px_30px_rgba(124,58,237,0.35)]
  hover:shadow-[0_15px_40px_rgba(124,58,237,0.45)]
">
                        Start for free
                    </button>
                </div>


                {/* Hero Image Wrapper - Zoom In Animation */}
                {/* Hero Image Wrapper */}
                <div className="relative w-full max-w-[92%] sm:max-w-3xl mx-auto mt-3 sm:mt-12 lg:mt-0">
                    {/* LEFT IMAGES - Responsive: w-12 on mobile, w-28 on desktop */}
                    <img
                        src={expert}
                        alt="Expert"
                        className="absolute left-[5%] lg:left-[100px] z-20 top-[10%] lg:top-[15%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />
                    <img
                        src={dev}
                        alt="Development"
                        className="absolute left-[0%] lg:left-[50px] z-20 top-[40%] lg:top-[38%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />
                    <img
                        src={backend}
                        alt="Backend"
                        className="absolute left-[8%] lg:left-[95px] z-20 top-[70%] lg:top-[60%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />

                    {/* RIGHT IMAGES - Responsive: w-12 on mobile, w-28 on desktop */}
                    <img
                        src={frontend}
                        alt="Frontend"
                        className="absolute right-[5%] lg:right-[100px] z-20 top-[10%] lg:top-[15%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />
                    <img
                        src={saas}
                        alt="SaaS"
                        className="absolute right-[0%] lg:right-[50px] z-20 top-[40%] lg:top-[38%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />
                    <img
                        src={uiux}
                        alt="UI/UX"
                        className="absolute right-[8%] lg:right-[95px] z-20 top-[70%] lg:top-[60%] w-12 sm:w-16 lg:w-28 opacity-90"
                    />

                    {/* MAIN HERO IMAGE - Rounded only at top */}
                    <img
                        src={heroImage}
                        alt="Hero Preview"
                        className="w-full h-auto rounded-t-[10px] sm:rounded-t-[40px] shadow-2xl relative border-x border-t border-gray-100 z-10"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;