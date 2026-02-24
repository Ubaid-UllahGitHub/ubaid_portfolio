import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                heading: "#020617",
                body: "#475569",
            },
            backgroundImage: {
                "nav-gradient":
                    "linear-gradient(rgb(54,58,68) 0%, rgb(3,7,18) 100%)",
            },
        },
    },
};

