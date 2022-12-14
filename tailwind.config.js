/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    corePlugins: {
        preflight: false,
    },
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],

    theme: {

        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            doIt: '1400px'
        },


        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
                secondary: 'var(--color-bg-secondary)',
            },
            textColor: {
                accent: 'var(--color-text-accent)',
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
            },
            colors: {
                'kbsColor': 'rgb(46, 53, 106)',
            },
            keyframes: {
                out: {
                    '0%': {opacity: '1'},
                    '50%': {opacity: '0.5'},
                    '100%': {opacity: '0'}
                },
            },
            animation: {
                'tracking-in': 'out 0.4s reverse',
                'tracking-out': 'out 0.4s linear',
            },
        }
    },
    variants: {},


}

