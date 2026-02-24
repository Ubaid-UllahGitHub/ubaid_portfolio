import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Menu,
    X,
    Home,
    FileText,
    User,
    Briefcase,
    Mail,
    Phone,
    Github,
    Linkedin
} from "lucide-react";
import logo from "@/assets/udevlogo_transparent1.png";

const drawerMenu = [
    { name: "Home", href: "/", icon: Home },
    { name: "Resume", href: "/resume.pdf", icon: FileText },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: User },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50">
                <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 font-inter backdrop-blur-lg bg-white/10 border-b border-black/10 transition-all duration-500">
                    <a href="#" className="flex items-center">
                        <img
                            src={logo}
                            alt="UDev Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </a>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-3 rounded-full bg-accent hover:scale-105 hover:shadow-lg transition-all duration-300"
                    >
                        <Menu className="w-6 h-6 text-white" />
                    </button>
                </nav>
            </header>

            {/* Sidebar */}
            <div
                className={`
        fixed top-0 right-0 h-screen w-[300px] bg-white/10 backdrop-blur-xl
        shadow-[-20px_0_50px_-12px_rgba(0,0,0,0.2)] rounded-l-[2rem]
        transform ${isOpen ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-700 ease-in-out
        overflow-y-auto z-50
      `}
            >
                {/* Close */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-3 rounded-full bg-accent hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                    <X className="w-6 h-6 text-white" />
                </button>

                {/* Logo */}
                <div className="px-6 pt-10 pb-4">
                    <a href="#" className="text-2xl font-bold text-brand-heading">
                        Momentum
                    </a>
                </div>

                <Separator className="my-4 bg-black/10" />

                {/* Menu */}
                <div className="flex flex-col gap-3 px-4 pb-6">
                    {drawerMenu.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={idx}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 px-4 py-3 rounded-2xl
                hover:bg-accent hover:text-white transition-all duration-300 group"
                            >
                                <Icon className="w-5 h-5 text-brand-heading/70 group-hover:text-white transition" />
                                <span className="font-medium">{item.name}</span>
                            </a>
                        );
                    })}
                </div>

                <Separator className="my-6 bg-black/10" />

                {/* Follow Me */}
                <div className="px-6 pb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
                        Follow Me
                    </h3>

                    <div className="flex flex-col gap-4 text-sm">

                        {[
                            { icon: Phone, text: "+92 300 1234567" },
                            { icon: Mail, text: "you@email.com" },
                            { icon: Github, text: "github.com/yourusername" },
                            { icon: Linkedin, text: "linkedin.com/in/yourusername" }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent transition">
                                        <Icon className="w-4 h-4 text-accent group-hover:text-white transition" />
                                    </div>
                                    <span className="text-brand-heading group-hover:text-accent transition">
                                        {item.text}
                                    </span>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </>
    );
}