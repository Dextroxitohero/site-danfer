// tailwind.config.js
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["var(--font-roboto)", "sans-serif"],
            },
            textShadow: {
                sm: '1px 1px 2px rgba(0,0,0,0.5)',
                md: '2px 2px 4px rgba(0,0,0,0.5)',
                lg: '3px 3px 6px rgba(0,0,0,0.5)',
            },
        },
    },
    plugins: [
        function ({ addUtilities, theme }) {
            const shadows = theme('textShadow');
            const utilities = Object.keys(shadows).map(key => {
                return {
                    [`.text-shadow-${key}`]: { textShadow: shadows[key] },
                };
            });
            addUtilities(utilities);
        },
    ],
};
