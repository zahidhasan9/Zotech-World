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
    },
  },
  plugins: [],
};
