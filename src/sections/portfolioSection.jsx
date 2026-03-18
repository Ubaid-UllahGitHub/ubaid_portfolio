

import { useRef, useLayoutEffect, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate
} from "framer-motion";


import bannerImg from "../assets/bidsy.webp";
import bannerImg1 from "../assets/portoflio-1.avif";
import bannerImg2 from "../assets/portoflio 4.avif";
import bannerImg3 from "../assets/portfolio2.avif";
import bannerImg4 from "../assets/portolfio 3.avif";

const cards = [
    { title: "Ventinove", desc: "Shopify development and conversion optimization.", image: bannerImg1 },
    { title: "Nutriworld", desc: "Custom Shopify store with premium UX.", image: bannerImg2 },
    { title: "Fitgirl", desc: "Landing page focused on product storytelling.", image: bannerImg3 },
    { title: "Bidsy", desc: "SaaS platform design and development.", image: bannerImg4 },
    { title: "Bidsy", desc: "SaaS platform design and development.", image: bannerImg4 },
    { title: "Bidsy", desc: "SaaS platform design and development.", image: bannerImg4 },
    { title: "Bidsy", desc: "SaaS platform design and development.", image: bannerImg4 },
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

    const [scrollWidth, setScrollWidth] = useState(0);
    const [sectionHeight, setSectionHeight] = useState("400vh");
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

    const x = useTransform(scrollYProgress, [0, 1], [0, scrollWidth ? -scrollWidth : 0]);
    const blurValue = useTransform(scrollYProgress, [0.02, 0.08], [0, 8]);
    const blur = useMotionTemplate`blur(${blurValue}px)`;
    const current = layoutConfig[breakpoint];
    const text = textConfig[breakpoint];

    const headingWidth = current.headingWidth;
    const cardsContainerWidth = current.cardsContainerWidth;
    const cardWidth = current.cardWidth;
    const lastCardWidth = current.lastCardWidth;
    const endOffset = current.endOffset;

    return (
        <section
            ref={ref}
            className="relative bg-white"
            style={{ height: sectionHeight }}
        >
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="w-full flex max-w-[2600px] mx-auto px-[clamp(24px,5vw,120px)] items-center">
                    {/* Heading */}
                    <motion.div
                        style={{ width: headingWidth, filter: blur }}
                        className="pr-8"
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
                        className="flex gap-8 h-screen items-center pt-10 pb-10"                    >
                        {cards.map((card, i) => {
                            const isLast = i === cards.length - 1;

                            return (
                                <div
                                    key={i}
                                    style={{ width: isLast ? lastCardWidth : cardWidth }}
                                    className={`h-[95vh] flex-none flex flex-col justify-between rounded shadow-lg overflow-hidden
    ${isLast ? "bg-[var(--accent)] text-white" : "bg-white"}`}
                                >
                                    {card.image && (
                                        <div className="relative overflow-hidden flex-1 rounded-lg">
                                            <motion.img
                                                src={card.image}
                                                alt={card.title}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ duration: 0.4 }}
                                                className="w-full h-full object-cover"
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
                                        <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
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
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}