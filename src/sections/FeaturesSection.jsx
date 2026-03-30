import React from "react";
import { fadeInUp, zoomIn, slideInBottom } from '../utilits/animations';
import { motion } from "framer-motion"; // Import motion
import img1 from "../assets/img1.svg";
import img2 from "../assets/globimg2.svg";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5man.svg";
import { useLayoutEffect, useState } from "react";

const textConfig = {
    medium: {
        title: "20px",
        desc: "16px",
        heading: "36px",
    },
    large: {
        title: "30px",
        desc: "20px",
        heading: "48px",
    },
    xl: {
        title: "42px",
        desc: "20px",
        heading: "64px",
    },
    ultra: {
        title: "45px",
        desc: "22px",
        heading: "80px",
    }
};


const layoutConfig = {
    medium: {
        gap: "24px",
        padding: "40px",
    },
    large: {
        gap: "28px",
        padding: "48px",
    },
    xl: {
        gap: "32px",
        padding: "56px",
    },
    ultra: {
        gap: "40px",
        padding: "64px",
    }
};

const featureData = [
    {
        title: "Custom Web Application Development",
        description: "Build scalable and high-performance web applications using modern technologies like React, Next.js, Node.js, and MongoDB.",
        img: img1,
        className: "md:col-span-2", // Large top-left box
    },
    {
        title: "React & Next.js Frontend Development",
        description: "Create fast, responsive, and SEO-friendly frontend applications using React and Next.js with modern UI frameworks.",
        img: img2,
        className: "md:col-span-1", // Top-right box
    },
    {
        title: "WordPress Website Development",
        description: "Develop professional and fully customizable WordPress websites for businesses, startups, and agencies.",
        img: img3,
        className: "md:col-span-1", // Bottom-left
    },
    {
        title: "Shopify E-commerce Development",
        description: "Create and customize high-converting Shopify stores with optimized user experience and performance.",
        img: img4,
        className: "md:col-span-1", // Bottom-middle
    },
    {
        title: "UI/UX & Landing Page Design",
        description: "Design visually appealing and conversion-focused landing pages and user interfaces for startups and digital products.",
        img: img5,
        className: "md:col-span-1", // Bottom-right
    },
];

export default function FeaturesSection() {
    const [breakpoint, setBreakpoint] = useState("medium");

    useLayoutEffect(() => {
        const detectBreakpoint = () => {
            const width = window.innerWidth;

            if (width >= 2600) setBreakpoint("ultra");
            else if (width >= 2000) setBreakpoint("xl");
            else if (width >= 1600) setBreakpoint("large");
            else setBreakpoint("medium");
        };

        detectBreakpoint();
        window.addEventListener("resize", detectBreakpoint);

        return () => window.removeEventListener("resize", detectBreakpoint);
    }, []);

    const text = textConfig[breakpoint];
    const layout = layoutConfig[breakpoint];
    return (
        <section className="py-12 bg-background font-inter">
            <div className="w-full max-w-[2600px] mx-auto px-[clamp(24px,5vw,120px)]">

                {/* Heading & Subtext */}
                <motion.div
                    variants={slideInBottom}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-20 flex flex-col items-center"
                >
                    <h2
                        className="big-heading max-w-5xl mb-6"
                    >
                        All AI tools are just in one place and simple to use
                    </h2>
                    <p className="text-brand-body text-xl font-500 max-w-md leading-relaxed">
                        Get started with AI quickly and easily with all your tools at your fingertips.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    id="services"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, }}
                    variants={zoomIn}
                    className="grid grid-cols-1 md:grid-cols-3"
                    style={{ gap: layout.gap, fontSize: text.heading }}>
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
                            < div className="pt-0"
                                style={{ padding: layout.padding }} >

                                <h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    style={{ fontSize: text.title }}
                                    className="font-medium text-brand-heading mb-3">
                                    {feature.title}
                                </h1>
                                <p
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    style={{ fontSize: text.desc, lineHeight: 1.5 }}
                                    className="text-brand-body font-medium leading-relaxed">
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