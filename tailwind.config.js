const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        fontFamily: {
            ar: ['Anton-Regular', 'sans-serif'],
            out_black: ['Outfit-Black', 'sans-serif'],
            out_bold: ['Outfit-Bold', 'sans-serif'],
            out_exbold: ['Outfit-ExtraBold', 'sans-serif'],
            out_exlight: ['Outfit-ExtraLight', 'sans-serif'],
            out_light: ['Outfit-Light', 'sans-serif'],
            out_reg: ['Outfit-Regular', 'sans-serif'],
            out_med: ['Outfit-Medium', 'sans-serif'],
            out_semi: ['Outfit-SemiBold', 'sans-serif'],
            out_thin: ['Outfit-Thin', 'sans-serif'],
            out_vari: ['Outfit-Variable', 'sans-serif'],
        },
    },
    plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}
