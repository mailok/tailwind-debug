/**
 * Example Tailwind CSS configuration with Debug Plugin
 */
module.exports = {
  content: [
    './*.html',
  ],
  safelist: [
    'debug',
    { pattern: /^debug-/ }
  ],
  theme: {
    extend: {
      // Custom theme extensions if needed
    },
  },
  plugins: [
    require('tailwind-debug-plugin'),
    // Other plugins can go here
  ],
} 