// src/utils/animations.js
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: "easeOut" }
    }
};
export const zoomIn = {
    hidden: {
        opacity: 0,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            ease: [0.55, 1, 0.36, 1] // easeOutCubic
        }
    }
};

// src/utils/animations.js

export const slideInBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.90, 1, 0.68, 1], // Custom cubic-bezier for a smooth "slide-to-stop"
        }
    }
};
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 2,            // moderate duration
            ease: [0.40, 0.1, 0.25, 1] // smoother easeInOut
        }
    }
};