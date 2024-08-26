// tailwind.config.js
module.exports = {
  content: [
    './*.html',      // HTML dosyalarını tarar
    './src/**/*.{js,jsx,ts,tsx}', // JS, JSX, TS ve TSX dosyalarını tarar (eğer varsa)
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1100px',
      },
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)',
      },
      screens: {
        'mdd': {'max': '800px'},
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
