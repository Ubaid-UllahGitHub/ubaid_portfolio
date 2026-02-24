import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';
import { motion } from "framer-motion"; // Import motion
import { fadeInUp, zoomIn } from '../utilits/animations';
import { LogIn } from 'lucide-react';

export default function CTASection() {
    const canvasRef = useRef();
    const r = useSpring(0, {
        stiffness: 280,
        damping: 40,
        restDelta: 0.001,
    });

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.4, // Adjusted tilt
            dark: 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [0.1, 0.8, 1],
            glowColor: [1, 1, 1],
            markers: [],
            onRender: (state) => {
                phi += 0.005;
                state.phi = phi + r.get();
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <section id="changelog" className="w-full bg-[#f8fafc] py-20 px-4 md:px-10 font-inter">
            {/* Main Card Container */}
            <div className="max-w-7xl mx-auto bg-white rounded-[40px] border border-border overflow-hidden shadow-sm relative min-h-[600px] flex flex-col md:flex-row">

                {/* Content Layer (Z-10 to stay above globe) */}
                <div className="relative z-10 p-8 md:p-20 flex flex-col items-start justify-start max-w-2xl">
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} className="md-heading mb-6 text-left">
                        Start Building with Momentum
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} className="text-brand-body text-lg md:text-xl mb-10 leading-relaxed text-left max-w-md">
                        Momentum empowers you to unleash your creativity and build anything you can imagine.
                    </motion.p>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp} className="flex items-center gap-2 px-6 py-3 bg-white border border-border rounded-full shadow-button-soft hover:bg-gray-50 transition-all font-medium text-brand-heading cursor-pointer">
                        <LogIn className="w-4 h-4" />
                        Contact sales
                    </motion.div>
                </div>

                {/* Globe Container - Positioned Bottom-Right and partially hidden */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={zoomIn} className="absolute -right-20 -bottom-40 md:-right-32 md:-bottom-64 w-[500px] h-[500px] md:w-[750px] md:h-[750px] pointer-events-none">
                    <div
                        className="w-full h-full"
                        style={{
                            // Mask to fade the edges like the screenshot
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 65%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 65%)'
                        }}
                    >
                        <canvas
                            ref={canvasRef}
                            style={{
                                width: '100%',
                                height: '100%',
                                contain: 'size layout paint',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Background Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
            </div>
        </section >
    );
}