

import { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate
} from "framer-motion";

import bannerImg2 from "../assets/Handroof card.png";
import bannerImg3 from "../assets/bidsycard.png";
import bannerImg4 from "../assets/uzzystudiocard.png";
import bannerImg5 from "../assets/ventinove2.png";
import bannerImg6 from "../assets/feals2.png";
import bannerImg7 from "../assets/physiomates.png";
import bannerImg8 from "../assets/thelinehotelcard.png";

const cards = [
    {
        title: "Bidsy", desc: "SaaS platform design and development.", image: bannerImg3, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "Roof Inspection App", desc: "Custom Shopify store with premium UX.", image: bannerImg2, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "UzzyStudio", desc: "SaaS platform design and development.", image: bannerImg4, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "Ventinove", desc: "Shopify theme development and conversion optimization.", image: bannerImg5, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "Feals", desc: "Landing page focused on product storytelling.", image: bannerImg6, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "Physiomates", desc: "Custom Shopify store with premium UX.", image: bannerImg7, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    {
        title: "The Line Hotel", desc: "Shopify theme development and conversion optimization.", image: bannerImg8, url: "https://bidsy.com",
        stack: ["React", "Node", "MongoDB"]
    },
    { title: "More Projects", desc: "Explore more of my work in the portfolio.", image: null },

];

const layoutConfig = {
    medium: {
        headingWidth: "70%",
        cardsContainerWidth: "35%",
        cardWidth: "70vw",
        lastCardWidth: "35vw",
        endOffset: 120,
    },
    large: {
        headingWidth: "65%",
        cardsContainerWidth: "40%",
        cardWidth: "60vw",
        lastCardWidth: "30vw",
        endOffset: 190,
    },
    xl: {
        headingWidth: "90%",
        cardsContainerWidth: "45%",
        cardWidth: "50vw",
        lastCardWidth: "25vw",
        endOffset: 220,
    },
    ultra: { // 🔥 2600px+
        headingWidth: "75%",
        cardsContainerWidth: "50%",
        cardWidth: "42vw",
        lastCardWidth: "20vw",
        endOffset: 260,
    }
};
const textConfig = {
    small: {
        title: "28px",
        desc: "14px",
    },
    medium: {
        title: "40px",
        desc: "18px",
    },
    large: {
        title: "60px",
        desc: "22px",
    },
    xl: {
        title: "70px",
        desc: "22px",
    },
    ultra: {
        title: "75px",
        desc: "24px",
    }
};

export default function PortfolioSection() {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [sectionHeight, setSectionHeight] = useState("400vh");
    const [breakpoint, setBreakpoint] = useState("medium");


    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 700);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

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
    useLayoutEffect(() => {
        const updateWidth = () => {
            const el = containerRef.current;
            if (!el) return;

            const totalWidth = el.scrollWidth;
            const visibleWidth = el.offsetWidth;

            const lastCard = el.lastElementChild;
            const lastCardWidth = lastCard ? lastCard.offsetWidth : 0;
            const gap = 32;

            const current = layoutConfig[breakpoint];

            const distance = Math.max(
                totalWidth - visibleWidth + lastCardWidth + gap + current.endOffset,
                0
            );

            setScrollWidth(distance);

            const vh = window.innerHeight;
            setSectionHeight(`${distance + vh * 1.2}px`);
        };

        updateWidth();
        setTimeout(updateWidth, 50);

        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, [breakpoint]);
    // useLayoutEffect(() => {

    //     const detectBreakpoint = () => {
    //         const width = window.innerWidth;

    //         if (width >= 2600) {
    //             setBreakpoint("ultra");
    //         } else if (width >= 2000) {
    //             setBreakpoint("xl");
    //         } else if (width >= 1600) {
    //             setBreakpoint("large");
    //         } else {
    //             setBreakpoint("medium");
    //         }
    //     };

    //     const updateWidth = () => {
    //         const el = containerRef.current;
    //         if (!el) return;

    //         const totalWidth = el.scrollWidth;
    //         const visibleWidth = el.offsetWidth;

    //         const lastCard = el.lastElementChild;
    //         const lastCardWidth = lastCard ? lastCard.offsetWidth : 0;
    //         const gap = 32;

    //         const current = layoutConfig[breakpoint];
    //         const endOffset = current.endOffset;

    //         const distance = Math.max(
    //             totalWidth - visibleWidth + lastCardWidth + gap + endOffset,
    //             0
    //         );

    //         setScrollWidth(distance);

    //         const vh = window.innerHeight;
    //         const requiredHeight = distance + vh * 1.2;
    //         setSectionHeight(`${requiredHeight}px`);
    //     };

    //     detectBreakpoint();
    //     updateWidth();
    //     setTimeout(updateWidth, 50);

    //     window.addEventListener("resize", detectBreakpoint);
    //     window.addEventListener("resize", updateWidth);

    //     return () => {
    //         window.removeEventListener("resize", detectBreakpoint);
    //         window.removeEventListener("resize", updateWidth);
    //     };

    // }, [breakpoint]);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const startX = isMobile ? window.innerWidth : 0;

    const x = useTransform(
        scrollYProgress,
        isMobile ? [0, 0.25, 1] : [0, 1],
        isMobile
            ? [startX, 0, scrollWidth ? -scrollWidth : 0]
            : [0, scrollWidth ? -scrollWidth : 0]
    );

    const blurValue = useTransform(scrollYProgress, [0.02, 0.08], [0, 8]);
    const blur = useMotionTemplate`blur(${blurValue}px)`;
    const current = layoutConfig[breakpoint];

    const currentBreakpoint = isMobile ? "small" : breakpoint;
    const text = textConfig[currentBreakpoint];

    const headingWidth = current.headingWidth;
    const cardsContainerWidth = current.cardsContainerWidth;
    const cardWidth = current.cardWidth;
    const lastCardWidth = current.lastCardWidth;
    const endOffset = current.endOffset;

    return (
        <section
            id="portfolio"
            ref={ref}
            className="relative bg-white"
            style={{ height: sectionHeight, padding: isMobile ? "0px 0px" : "40px 0px" }}
        >
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="w-full flex max-w-[2600px] mx-auto px-[clamp(24px,5vw,120px)] items-center">
                    {/* Heading */}
                    <motion.div
                        style={{ width: isMobile ? "100%" : headingWidth, filter: blur }}
                        className={`${isMobile
                            ? "absolute top-0 left-0 w-full h-screen flex items-center justify-center text-center px-6 z-0"
                            : "pr-8"
                            }`}
                    >
                        <h2 className="big-heading font-medium">
                            Empowering B2B <br />
                            <span className="text-accent/40 font-medium">companies</span> with <br />
                            world-class <span className="text-accent/40 font-medium">designs</span>.
                        </h2>
                    </motion.div>

                    {/* Cards */}
                    <motion.div
                        ref={containerRef}
                        style={{ x, width: cardsContainerWidth }}
                        className={`relative z-20 flex gap-6 ${isMobile
                            ? "h-screen items-center px-4"
                            : "h-screen items-center pt-10 pb-10"
                            }`}
                    >
                        {cards.map((card, i) => {
                            const isLast = i === cards.length - 1;

                            return (
                                <div
                                    key={i}
                                    onClick={() => !isLast && card.image && setActiveCard(card)}
                                    style={{
                                        width: isLast
                                            ? (isMobile ? "70vw" : lastCardWidth)
                                            : (isMobile ? "85vw" : cardWidth)
                                    }}
                                    className={`cursor-pointer bg-white ${isMobile
                                        ? "h-auto min-h-[280px] max-h-[420px]"
                                        : "h-[95vh]"
                                        } flex-none flex flex-col justify-between rounded shadow-lg overflow-hidden`}
                                >
                                    {card.image && (
                                        <div className="relative overflow-hidden flex-1 rounded-lg bg-black">                                            <motion.img
                                            src={card.image}
                                            alt={card.title}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.4 }}
                                            className={`w-full object-cover ${isMobile
                                                ? "min-h-[280px] max-h-[420px]"
                                                : "h-full"
                                                }`}
                                        />
                                            <div className="absolute bottom-6 left-6 text-white z-10">
                                                <h3
                                                    style={{ fontSize: text.title }}
                                                    className="font-inter font-semibold tracking-[-0.03em] text-white"
                                                >
                                                    {card.title}
                                                </h3>

                                                <p
                                                    style={{ fontSize: text.desc }}
                                                    className="mt-2 text-white/90"
                                                >
                                                    {card.desc}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {isLast && (
                                        <div
                                            className="relative overflow-hidden flex-1 rounded-lg flex flex-col items-center justify-center text-center p-6 gap-4"
                                            style={{ backgroundColor: "rgba(124, 58, 237, 0.15)" }} // <-- soft accent
                                        >
                                            <h3
                                                style={{ fontSize: text.title }}
                                                className="font-inter font-semibold tracking-[-0.03em] text-accent"
                                            >
                                                {card.title}
                                            </h3>
                                            <p
                                                style={{ fontSize: text.desc }}
                                                className="text-accent/40 max-w-[300px]"
                                            >
                                                {card.desc}
                                            </p>

                                            <button className="mt-2 bg-white text-accent font-medium px-6 py-3 rounded-lg shadow hover:scale-105 transition">
                                                View Projects →
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>


                </div>
            </div>
            {activeCard && (
                <motion.div
                    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveCard(null)}
                >
                    <motion.div
                        className="bg-white rounded-2xl max-w-2xl w-full p-8 relative"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={() => setActiveCard(null)}
                            className="absolute top-4 right-4 text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* Content */}
                        <h2 className="text-3xl font-semibold mb-3">
                            {activeCard.title}
                        </h2>

                        <p className="text-gray-600 mb-4">
                            {activeCard.desc}
                        </p>

                        {/* Stack */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {activeCard.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <a
                            href={activeCard.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-accent text-white px-6 py-3 rounded-lg"
                        >
                            Visit Project →
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}