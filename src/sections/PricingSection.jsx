import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { fadeInUp, zoomIn } from '../utilits/animations';
import { motion } from "framer-motion"; // Import motion

const pricingPlans = [
    {
        name: "Basic",
        description: "Boost your productivity with the power of generative AI.",
        price: "$24/m",
        features: [
            "+20 Cutting-edge AI Models",
            "1200 AI Credits / month",
            "GPTs (AI Assistants)",
            "Prompts Library",
            "Advanced search",
            "Chat Folders",
        ],
        isPopular: false,
    },
    {
        name: "Pro",
        description: "GPT-4 Turbo with unlimited access and advanced AI features.",
        price: "$24/m",
        features: [
            "Everything in Free",
            "Cutting-edge image generation",
            "1500 AI Credits / month",
            "DALL·E 3",
            "Stable Diffusion XL 1.0",
            "Stable Diffusion 1.6",
        ],
        isPopular: true,
    },
    {
        name: "Team",
        description: "Teamwork, data privacy & security, premium support.",
        price: "$24/m",
        features: [
            "Everything in Pro",
            "Team Spaces & Collaboration",
            "Advanced admin panel with permissions",
            "Enterprise-grade Security & Privacy",
            "Performance Analytics & Insights",
            "Priority Support",
        ],
        isPopular: false,
    },
];

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
        <section id="pricing" className="py-12 px-4 bg-background font-inter">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="big-heading mb-4">Simple pricing plans
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp} className="text-brand-body text-lg">
                    Enjoy the power of the best AI models on a single platform
                </motion.p>
            </div>

            {/* Toggle Switch */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={zoomIn} className="flex justify-center mb-16">
                <div className="flex items-center p-1 bg-gray-100/50 rounded-full border border-border">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-brand-heading' : 'text-brand-body'
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('annual')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${billingCycle === 'annual' ? 'bg-white shadow-sm text-brand-heading' : 'text-brand-body'
                            }`}
                    >
                        Annual

                    </button>
                    <span className="text-[10px] bg-purple-100 text-purple-600 px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                        Save 30%
                    </span>
                </div>
            </motion.div>

            {/* Pricing Cards Grid */}
            <div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={zoomIn} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-[32px] border transition-all duration-300 flex flex-col ${plan.isPopular
                            ? 'bg-[#efeffe] border-purple-200' // Light purple tint for Pro
                            : 'bg-white border-border hover:shadow-lg'
                            }`}
                    >
                        {/* Top Section */}
                        <div className="mb-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-bold text-brand-heading">{plan.name}</h3>
                                {plan.isPopular && (
                                    <span className="text-[10px] font-bold text-purple-600 bg-white px-3 py-1 rounded-full border border-purple-100 uppercase tracking-widest">
                                        Most popular
                                    </span>
                                )}
                            </div>
                            <p className="text-brand-body text-sm leading-relaxed min-h-[40px]">
                                {plan.description}
                            </p>
                            <div className="mt-6">
                                <span className="text-5xl font-bold text-brand-heading">{plan.price}</span>
                            </div>
                        </div>

                        <hr className="border-border/50 mb-8" />

                        {/* Features List */}
                        <ul className="space-y-4 mb-10 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-brand-body">
                                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                            className={`w-full py-4 rounded-2xl font-semibold transition-all ${plan.isPopular
                                ? 'bg-[#1e2024] text-white hover:bg-black shadow-lg'
                                : 'bg-white text-brand-heading border border-border shadow-button-soft hover:bg-gray-50'
                                }`}
                        >
                            Get started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}