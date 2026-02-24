import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { fadeInUp, slideInBottom } from '../utilits/animations';
import { motion } from "framer-motion"; // Import motion

const faqData = [
    {
        id: 1,
        question: "What is Momentum?",
        answer: "Momentum is an all-in-one AI platform that brings together the world's most powerful AI models into a single, easy-to-use interface, helping you streamline your research, writing, and creative processes."
    },
    {
        id: 2,
        question: "How does Momentum work?",
        answer: "Momentum connects to various AI providers through their APIs, allowing you to switch between different models like GPT-4, Claude, and Stable Diffusion instantly within one chat window."
    },
    {
        id: 3,
        question: "What features does Momentum offer?",
        answer: "We offer advanced document chat, image generation, prompt libraries, custom AI assistants (GPTs), and collaborative team spaces."
    },
    {
        id: 4,
        question: "Is my data safe with Momentum?",
        answer: "Yes, we prioritize security. Your data is encrypted at rest and in transit, and we offer enterprise-grade privacy controls to ensure your conversations remain confidential."
    },
    {
        id: 5,
        question: "Can Momentum integrate with other apps?",
        answer: "Currently, we offer integrations with popular productivity tools and are constantly expanding our API capabilities for custom workflows."
    },
    {
        id: 6,
        question: "What features does Momentum offer?", // Duplicate as per screenshot
        answer: "Beyond standard chat, we provide advanced search capabilities and organized chat folders to keep your projects manageable."
    },
    {
        id: 7,
        question: "Is Momentum available on all devices?",
        answer: "Yes, Momentum is a responsive web application that works seamlessly on desktop, tablet, and mobile browsers."
    }
];

export default function FAQSection() {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="w-full py-12 px-4 bg-background font-inter">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="big-heading mb-4 uppercase tracking-tight">FAQ
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="text-brand-body text-xl md:text-2xl font-medium">
                    Frequently Asked Questions
                </motion.p>
            </div>

            {/* Accordion Container */}
            <motion.div
                variants={slideInBottom}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} className="max-w-3xl mt-35 mx-auto border-t border-border/60">
                {faqData.map((item) => (
                    <div key={item.id} className="border-b border-border/60">
                        <button
                            onClick={() => toggleAccordion(item.id)}
                            className="w-full py-6 flex items-center gap-6 text-left hover:bg-gray-50/50 transition-colors group"
                        >
                            {/* Plus Icon with Rotation */}
                            <div className="flex-shrink-0">
                                <Plus
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openId === item.id ? 'rotate-45' : ''
                                        }`}
                                />
                            </div>

                            {/* Question Text */}
                            <span className="text-lg md:text-xl font-semibold text-brand-heading">
                                {item.question}
                            </span>
                        </button>

                        {/* Answer - Expandable Section */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-96 pb-8' : 'max-h-0'
                                }`}
                        >
                            <div className="pl-11 pr-4">
                                <p className="text-brand-body text-lg leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}