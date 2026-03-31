import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        const targets = document.querySelectorAll(
            "a, button, .cursor-pointer"
        );

        const addHover = () => setHover(true);
        const removeHover = () => setHover(false);

        targets.forEach((el) => {
            el.addEventListener("mouseenter", addHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", addHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <motion.div
            animate={{
                x: pos.x - -8,
                y: pos.y - 48,
                scale: hover ? 1 : 0.5,
                opacity: hover ? 1 : 0,
            }}
            transition={{
                x: { type: "spring", stiffness: 400, damping: 30 },
                y: { type: "spring", stiffness: 400, damping: 30 },
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 },
            }}
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
        >
            <div className="w-19 h-19 rounded-full flex items-center justify-center bg-primary shadow-lg">
                <ArrowUpRight size={36} className="text-accent" />
            </div>
        </motion.div>
    );
}