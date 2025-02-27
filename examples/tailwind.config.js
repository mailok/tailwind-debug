/**
 * Example Tailwind CSS configuration with Debug Plugin
 */
module.exports = {
  content: ["./index.html"],
  safelist: ["debug", { pattern: /^debug-/ }],
  theme: {
    extend: {
      // Custom theme extensions if needed
    },
  },
  plugins: [
    require("../dist"),
    // Other plugins can go here
  ],
}; 