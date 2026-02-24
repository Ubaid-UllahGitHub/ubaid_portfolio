import React from 'react';
import { Twitter, Facebook, Youtube } from 'lucide-react';
import { motion } from "framer-motion"; // Import motion
import { fadeInUp, zoomIn } from '../../utilits/animations';

const footerLinks = {
    Product: ['Features', 'Pricing', 'Blog', 'Changelog'],
    Support: ['Help Desk', 'Public roadmap', 'Discord'],
    Company: ['Privacy Policy', 'Terms of use']
};

export default function Footer() {
    return (
        <footer className="w-full bg-white py-20 px-4 md:px-10 border-t border-border font-inter">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

                    {/* Left Side: Branding and Newsletter */}
                    <div className="flex flex-col max-w-sm">
                        <div
                            className="text-2xl font-bold text-brand-heading mb-8">Momentum</div>

                        <div

                            className="relative flex items-center p-1.5 bg-gray-50 rounded-full border border-border mb-4">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm text-brand-heading placeholder:text-gray-400"
                            />
                            <button className="bg-[#1e2024] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp} className="text-sm text-brand-body">No Spam. Just Product updates.</p>
                    </div>

                    {/* Right Side: Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={zoomIn} key={title}>
                                <h4 className="font-semibold text-brand-heading mb-6">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-body hover:text-brand-heading transition-colors text-sm">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar: Copyright and Socials */}
                <div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={zoomIn} className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border/50 gap-6">
                    <p className="text-sm text-brand-body font-medium">
                        Momentum. All right reserved. © 2024
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-gray-400 hover:text-brand-heading transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-brand-heading transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-brand-heading transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
}