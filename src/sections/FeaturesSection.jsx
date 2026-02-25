import React from "react";
import { fadeInUp, zoomIn, slideInBottom } from '../utilits/animations';
import { motion } from "framer-motion"; // Import motion
import img1 from "../assets/img1.svg";
import img2 from "../assets/globimg2.svg";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5man.svg";

const featureData = [
    {
        title: "Time Saving",
        description: "Search for discussions, create folders, add tags, export data, and much more.",
        img: img1,
        className: "md:col-span-2", // Large top-left box
    },
    {
        title: "Web Search",
        description: "Unleash the potential of cutting-edge AI through a seamless internet experience.",
        img: img2,
        className: "md:col-span-1", // Top-right box
    },
    {
        title: "Multiple Models",
        description: "Switch between models in the same chat: Text, images, web search.",
        img: img3,
        className: "md:col-span-1", // Bottom-left
    },
    {
        title: "Prompt Library",
        description: "Enjoy exclusive prompts categorized by marketing, social media, HR, sales, and much more.",
        img: img4,
        className: "md:col-span-1", // Bottom-middle
    },
    {
        title: "Chat Synchronization",
        description: "Sync and back up your chat data across multiple devices.",
        img: img5,
        className: "md:col-span-1", // Bottom-right
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-12 px-6 bg-background font-inter">
            <div className="max-w-7xl mx-auto">

                {/* Heading & Subtext */}
                <motion.div
                    variants={slideInBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-20 flex flex-col items-center"
                >
                    <h2 className="big-heading max-w-4xl mb-6">
                        All AI tools are just in one place and simple to use
                    </h2>
                    <p className="text-brand-body text-xl font-500 max-w-md leading-relaxed">
                        Get started with AI quickly and easily with all your tools at your fingertips.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, }}
                    variants={zoomIn}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featureData.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col bg-[#F8FAFC] border border-border rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-button-soft ${feature.className}`}
                        >
                            {/* Image Container */}
                            <p
                                className="flex-1 flex items-center justify-center p-8 min-h-[280px]">
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    className="w-full h-full object-contain pointer-events-none"
                                />
                            </p>

                            {/* Text Content */}
                            < div className="p-10 pt-0" >

                                <h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="text-xl font-medium text-brand-heading mb-3">
                                    {feature.title}
                                </h1>
                                <p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    className="text-brand-body text-normal font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div >
        </section >
    );
}