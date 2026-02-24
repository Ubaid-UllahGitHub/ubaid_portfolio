import React from "react";
import { motion } from "framer-motion"; // Import motion
import { fadeIn, fadeInUp, zoomIn, slideInBottom } from '../utilits/animations';


// Individual Icon Components
const IconLightning = () => (
    <svg viewBox="0 0 256 256" className="w-full h-full stroke-brand-heading fill-none">
        <path
            d="M200,120H144V40L56,152h56v72Z"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const IconRocket = () => (
    <svg
        viewBox="0 0 256 256"
        className="w-full h-full fill-brand-heading"
        aria-hidden="true"
    >
        <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z" />
    </svg>
);

const IconDocument = () => (
    <svg viewBox="0 0 256 256" className="w-full h-full fill-brand-heading">
        <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Z" />
    </svg>
);

const infoBoxes = [
    {
        title: "Get instant answers",
        desc: "Say goodbye to endless searching and waiting for replies with our tool.",
        icon: IconLightning,
    },
    {
        title: "Find creative inspiration",
        desc: "Our tool empowers you to break through creatives and discover fresh ideas.",
        icon: IconRocket,
    },
    {
        title: "Chat with any type of document",
        desc: "Simply upload your document, ask questions, seek clarification, or discuss ideas.",
        icon: IconDocument,
    },
];

export default function CreativeSection() {
    return (
        <section className="py-12 px-6 bg-background font-inter">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Heading Section */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"     // 🔥 animate on view
                    viewport={{ once: true, amount: 0.3 }} // control trigger
                    className="text-center mb-4 flex flex-col items-center">
                    <h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} className="big-heading max-w-3xl mb-6">
                        Discover unlimited creative possibilities
                    </h1>
                    <p
                        className="text-brand-body text-lg font-medium max-w-xl leading-relaxed">
                        Your go-to source for quick and accurate responses and top notch resources base
                    </p>
                </motion.div>

                {/* Dashboard Image */}
                <div className="pt-10 relative z-10 w-full flex justify-center">
                    <div className="big-image-wrapper">
                        <img
                            src="/src/assets/bigmge.avif"
                            alt="Dashboard Preview"
                            className="big-image-inner"
                        />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 w-full max-w-6xl">
                    {infoBoxes.map((box, index) => {
                        // FIX: Move the Icon assignment inside the map function
                        const IconComponent = box.icon;

                        return (
                            <motion.div
                                variants={slideInBottom}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                key={index} className="flex flex-col items-center text-center" >
                                <div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={zoomIn} className="w-12 h-12 bg-[#f1f5f9] border-border rounded-xl p-2.5 mb-6 flex items-center justify-center">
                                    <IconComponent />
                                </div>

                                <h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp} className="text-brand-heading text-lg font-bold mb-3">
                                    {box.title}
                                </h1>
                                <p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp} className="text-brand-body text-sm font-medium leading-relaxed max-w-[280px]">
                                    {box.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}