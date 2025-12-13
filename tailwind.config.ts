import type { Config } from "tailwindcss";

const config: Config = {
    // --- FÍJATE AQUÍ: Añadimos 'src/' al principio ---
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                primary: {
                    DEFAULT: "#590d0d",
                    foreground: "#ffe5e5",
                },
                ruby: {
                    DEFAULT: "#e60023", // Rojo intenso pero no chillón
                    glow: "#ff1f1f",
                },
                accent: {
                    DEFAULT: "#c5a059",
                    hover: "#d4af37",
                },
                foreground: "#e5e5e5",
                muted: "#a3a3a3",
            },
            fontFamily: {
                sans: ["var(--font-sans)"],
                serif: ["var(--font-serif)"],
            },
        },
    },
    plugins: [],
};
export default config;