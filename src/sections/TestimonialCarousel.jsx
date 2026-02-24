import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, zoomIn } from '../utilits/animations';

const testimonials = [
    {
        id: 1,
        stars: 5,
        text: "Momentum has become my go-to tool for instant research and idea generation. It's like having a knowledgeable friend always ready to lend a hand!",
        name: "John Watson",
        role: "Freelance Writer",
        image: "https://i.pravatar.cc/150?u=john1"
    },
    {
        id: 2,
        stars: 5,
        text: "Finding inspiration for my designs used to be a challenge, but Momentum has completely transformed my creative process. It's like having a virtual brainstorming partner!",
        name: "Emily Saunders",
        role: "Graphic Designer",
        image: "https://i.pravatar.cc/150?u=emily"
    },
    {
        id: 3,
        stars: 5,
        text: "Document chat on Momentum has streamlined our legal team's communication process. We can quickly discuss case details and share insights, improving our efficiency.",
        name: "John Watson",
        role: "Freelance Writer",
        image: "https://i.pravatar.cc/150?u=john2"
    }, {
        id: 4,
        stars: 5,
        text: "Momentum has become my go-to tool for instant research and idea generation. It's like having a knowledgeable friend always ready to lend a hand!",
        name: "John Watson",
        role: "Freelance Writer",
        image: "https://i.pravatar.cc/150?u=john1"
    },
    {
        id: 5,
        stars: 5,
        text: "Finding inspiration for my designs used to be a challenge, but Momentum has completely transformed my creative process. It's like having a virtual brainstorming partner!",
        name: "Emily Saunders",
        role: "Graphic Designer",
        image: "https://i.pravatar.cc/150?u=emily"
    },
    {
        id: 6,
        stars: 5,
        text: "Document chat on Momentum has streamlined our legal team's communication process. We can quickly discuss case details and share insights, improving our efficiency.",
        name: "John Watson",
        role: "Freelance Writer",
        image: "https://i.pravatar.cc/150?u=john2"
    }
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);

    // Update visibility count for calculations
    useEffect(() => {
        const handleResize = () => {
            setVisibleCards(window.innerWidth < 768 ? 1 : 3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = testimonials.length - visibleCards;

    const nextSlide = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section id="testimonials" className="relative w-full py-10 px-4 overflow-hidden bg-background">
            <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"     // 🔥 animate on view
                viewport={{ once: true, amount: 0.3 }} // control trigger
                className="max-w-4xl mx-auto text-center mb-16">
                <h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="big-heading mb-6">
                    All AI tools are just in one place and simple to use
                </h1>
                <p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="text-brand-body text-lg md:text-xl max-w-2xl mx-auto font-inter">
                    Get started with AI quickly and easily with all your tools at your fingertips.
                </p>
            </motion.div>

            <div className="bg-[#f8fafc] py-[60px]">
                <div className="relative max-w-6xl mx-auto px-6 md:px-12 ">

                    {/* MOBILE ARROWS: Only visible on mobile, positioned above slider */}
                    <div className="flex md:hidden justify-center gap-4 mb-8">
                        <button
                            onClick={prevSlide}
                            disabled={currentIndex === 0}
                            className={`p-3 rounded-full bg-white shadow-sm border border-border ${currentIndex === 0 ? 'opacity-30' : ''}`}
                        >
                            <ChevronLeft className="w-6 h-6 text-primary" />
                        </button>
                        <button
                            onClick={nextSlide}
                            disabled={currentIndex >= maxIndex}
                            className={`p-3 rounded-full bg-white shadow-sm border border-border ${currentIndex >= maxIndex ? 'opacity-30' : ''}`}
                        >
                            <ChevronRight className="w-6 h-6 text-primary" />
                        </button>
                    </div>

                    {/* DESKTOP ARROWS: Hidden on mobile, absolute on desktop */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-button-soft shadow-button-soft transition-all border border-border 
                        ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95 cursor-pointer'}`}
                    >
                        <ChevronLeft className="w-6 h-6 text-primary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-button-soft shadow-button-soft transition-all border border-border 
                        ${currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105 active:scale-95 cursor-pointer'}`}
                    >
                        <ChevronRight className="w-6 h-6 text-primary" />
                    </button>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
                        >
                            {testimonials.map((t) => (
                                <div
                                    key={t.id}
                                    className="w-full md:w-1/3 flex-shrink-0 px-3"
                                >
                                    <div className="h-full bg-white border border-border rounded-[24px] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                                        <div>
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(t.stars)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                                                ))}
                                            </div>
                                            <p className="text-brand-heading font-inter leading-relaxed mb-8">
                                                {t.text}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-12 h-12 rounded-full object-cover border border-border"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-brand-heading text-sm">{t.name}</h4>
                                                <p className="text-brand-body text-xs">{t.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}