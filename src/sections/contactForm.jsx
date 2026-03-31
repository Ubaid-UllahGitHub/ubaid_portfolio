import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, zoomIn, slideInBottom } from '../utilits/animations';


const interests = [
    "Web Development", "App from scratch", "UX/UI Design", "Branding",
    "Site from scratch", "App Development", "Maintenance"
];

const budgets = ["≤$5K", "$10K-$20K", "$30K-$40K", "$50K-$60K", ">$100K"];

export default function ContactForm() {
    const [selectedInterest, setSelectedInterest] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");

    return (
        <section className="bg-white py-20 px-[clamp(24px,5vw,120px)]">
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
            <div className="max-w-[2600px] mx-auto flex flex-col items-center">
                <form
                    action="https://formspree.io/f/mzzblwpj"
                    method="POST"
                    className="w-full max-w-4xl space-y-10 md:space-y-12"
                >

                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                        <div className="flex flex-col gap-3 md:gap-4">
                            <label className="text-base md:text-lg font-medium text-brand-heading">Name & Company</label>
                            <input
                                type="text"
                                name="name_and_company"
                                placeholder="John from Apple"
                                required
                                className="border-b border-gray-300 py-3 outline-none focus:border-accent transition-colors placeholder:text-gray-300 bg-transparent text-sm md:text-base"
                            />
                        </div>
                        <div className="flex flex-col gap-3 md:gap-4">
                            <label className="text-base md:text-lg font-medium text-brand-heading">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="john@apple.com"
                                required
                                className="border-b border-gray-300 py-3 outline-none focus:border-accent transition-colors placeholder:text-gray-300 bg-transparent text-sm md:text-base"
                            />
                        </div>
                    </div>

                    {/* Row 2: Interests */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        <label className="text-base md:text-lg font-medium text-brand-heading">I'm interested in...</label>
                        <input type="hidden" name="interest" value={selectedInterest} />
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {interests.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setSelectedInterest(item)}
                                    className={`px-5 py-3 md:px-8 md:py-4 rounded-full border transition-all text-xs md:text-sm font-medium ${selectedInterest === item
                                            ? "bg-brand-heading text-white border-brand-heading"
                                            : "border-gray-200 text-brand-heading hover:border-gray-400"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Row 3: Budget */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        <label className="text-base md:text-lg font-medium text-brand-heading">Project budget (USD)</label>
                        <input type="hidden" name="budget" value={selectedBudget} />
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {budgets.map((item) => (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => setSelectedBudget(item)}
                                    className={`px-5 py-3 md:px-8 md:py-4 rounded-full border transition-all text-xs md:text-sm font-medium ${selectedBudget === item
                                            ? "bg-brand-heading text-white border-brand-heading"
                                            : "border-gray-200 text-brand-heading hover:border-gray-400"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="flex flex-col gap-3 pt-4">
                        <label className="text-base md:text-lg font-medium text-brand-heading">Tell us more</label>
                        <textarea
                            name="message"
                            rows={1}
                            placeholder="Something about your great idea"
                            className="border-b border-gray-300 py-4 outline-none focus:border-accent transition-colors placeholder:text-gray-300 resize-none bg-transparent text-sm md:text-base"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 flex justify-center md:justify-start">
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-medium text-base md:text-lg flex items-center justify-center gap-2 hover:bg-accent transition-colors shadow-lg"
                        >
                            Submit the request
                            <span className="hidden md:inline-block w-2 h-2 bg-white rounded-full ml-2"></span>
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}