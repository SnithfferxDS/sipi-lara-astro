import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'penn_blue': { DEFAULT: '#032050', 100: '#010610', 200: '#010d1f', 300: '#02132f', 400: '#021a3f', 500: '#032050', 600: '#0641a1', 700: '#0963f4', 800: '#5a97f9', 900: '#accbfc' },
                'blue_crayon': { DEFAULT: '#2879fe', 100: '#00173b', 200: '#012d76', 300: '#0144b1', 400: '#015beb', 500: '#2879fe', 600: '#5496fe', 700: '#7fb0fe', 800: '#aacaff', 900: '#d4e5ff' },
                'selective_yellow': { DEFAULT: '#ffb503', 100: '#342400', 200: '#684900', 300: '#9c6d00', 400: '#d09200', 500: '#ffb503', 600: '#ffc337', 700: '#ffd269', 800: '#ffe19b', 900: '#fff0cd' },
                'engineering_orange': { DEFAULT: '#CD000E', 100: '#290003', 200: '#520005', 300: '#7a0008', 400: '#a3000b', 500: '#cd000e', 600: '#ff0a1b', 700: '#ff4754', 800: '#ff858d', 900: '#ffc2c6' },
                'denim': { DEFAULT: '#335da7', 100: '#0a1322', 200: '#152643', 300: '#1f3865', 400: '#294b86', 500: '#335da7', 600: '#4d7ac8', 700: '#7a9bd6', 800: '#a6bde4', 900: '#d3def1' },
                'viridian': { DEFAULT: '#1a8e71', 100: '#051c17', 200: '#0a392d', 300: '#105544', 400: '#15725b', 500: '#1a8e71', 600: '#25c89f', 700: '#52dfbc', 800: '#8cead2', 900: '#c5f4e9' },
                'alice_blue': { DEFAULT: '#DCE1E9', 100: '#232b38', 200: '#465670', 300: '#6d82a4', 400: '#a5b2c6', 500: '#dce1e9', 600: '#e3e7ee', 700: '#eaedf2', 800: '#f1f3f6', 900: '#f8f9fb' }
            }
        },
    },
    plugins: [],
};
