/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      fontFamily: {
        Playwrite: ['Playwrite VN', 'serif'],
        Noto_Sans: ['Noto_Sans', 'serif'],
        Montserrat_Sans: ['Montserrat', 'serif'],
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      screens: {
        phone: '390px',
        tablet: '640px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
