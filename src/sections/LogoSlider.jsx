import React from "react";
import { fadeInUp, zoomIn, slideInBottom } from '../utilits/animations';
import { motion } from "framer-motion"; // Import motion
// You can easily change the svgs here later
const LOGO_DATA = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: `Company ${i + 1}`,
    // Currently using your Momentum SVG for all
    svg: (
        <svg viewBox="0 0 280 45" fill="none" className="w-full h-auto text-slate-400 opacity-70 transition-opacity hover:opacity-100">
            <path d="M44.5 12.5C39.5 12.5 35 15.5 32.5 20C30 15.5 25.5 12.5 20.5 12.5C12.5 12.5 6 19 6 27C6 35 12.5 41.5 20.5 41.5C25.5 41.5 30 38.5 32.5 34C35 38.5 39.5 41.5 44.5 41.5C52.5 41.5 59 35 59 27C59 19 52.5 12.5 44.5 12.5ZM20.5 34C16.6 34 13.5 30.9 13.5 27C13.5 23.1 16.6 20 20.5 20C24.4 20 27.5 23.1 27.5 27C27.5 30.9 24.4 34 20.5 34ZM44.5 34C40.6 34 37.5 30.9 37.5 27C37.5 23.1 40.6 20 44.5 20C48.4 20 51.5 23.1 51.5 27C51.5 30.9 48.4 34 44.5 34Z" fill="currentColor" />
            <text x="75" y="35" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" fill="currentColor" style={{ letterSpacing: "-1px" }}>MOMENTUM</text>
        </svg>
    )
}));

const LogoSlider = () => {
    return (
        <section className="relative w-full overflow-hidden pt-16 pb-30 bg-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp} className="font-inter text-center text-sm font-bold tracking-tighter uppercase text-brand-body mb-10">
                Used by thousands of fast-growing startups
            </motion.div>

            {/* Fade Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex">
                <ul className="flex items-center gap-16 animate-infinite-scroll w-[max-content]">
                    {/* Render the 12 objects, then the same 12 again for the loop */}
                    {[...LOGO_DATA, ...LOGO_DATA].map((logo, index) => (
                        <li key={`${logo.id}-${index}`} className="flex-none">
                            <div className="flex items-center justify-center w-40 h-12 sm:w-48">
                                {logo.svg}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LogoSlider;