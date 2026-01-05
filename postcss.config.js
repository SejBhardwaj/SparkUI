export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

// PurgeCSS configuration
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
      safelist: ['html', 'body'],
    },
  },
};
