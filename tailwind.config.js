/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0F172A", // Deep Navy/Slate (Premium)
                secondary: "#1E3A8A", // Rich Blue
                accent: "#C6A45C", // Premium Gold/Bronze
                surface: "#F8FAFC", // Light Grey Surface
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                script: ['Great Vibes', 'cursive'],
            },
            backgroundImage: {
                'hero-pattern': "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
            },
        },
    },
    plugins: [],
}
