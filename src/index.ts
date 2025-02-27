/**
 * @fileoverview Tailwind CSS Debug Plugin
 * A plugin for Tailwind CSS that adds debug utility classes to help visualize layouts
 */

import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';

/**
 * Creates the debug plugin for Tailwind CSS
 */
const debugPlugin = plugin(function ({ addUtilities, matchUtilities, theme }) {
  addUtilities({
    ".debug": {
      outline: `2px solid ${colors.red[500]}`,
    },
  });

  matchUtilities(
    {
      debug: (value) => {
        if (value.includes("-")) {
          const parts = value.split("-");

          // Handle color-shade only
          if (parts.length === 2) {
            const [color, shade] = parts;
            const colorValue = theme(`colors.${color}.${shade}`);

            if (colorValue) {
              return {
                outline: `2px solid ${colorValue}`,
              };
            }
          }

          // Handle thickness-color-shade
          if (parts.length === 3) {
            const [thickness, color, shade] = parts;
            const thicknessNum = (parseInt(thickness) || 1) + 1;
            const colorValue = theme(`colors.${color}.${shade}`);

            return {
              outline: `${thicknessNum}px solid ${colorValue}`,
            };
          }
        }

        const thickness = (parseInt(value) || 1) + 1;
        return {
          outline: `${thickness}px solid ${colors.red[500]}`,
        };
      },
    },
    {
      values: {
        ...Object.fromEntries(
          Array.from({ length: 20 }, (_, i) => [i.toString(), i.toString()])
        ),
        ...Object.entries(colors).reduce((acc, [colorName, shades]) => {
          if (typeof shades === "object") {
            // Add color-shade entries
            Object.keys(shades).forEach((shade) => {
              acc[`${colorName}-${shade}`] = `${colorName}-${shade}`;
            });

            // Add thickness-color-shade entries
            Object.keys(shades).forEach((shade) => {
              Array.from({ length: 20 }, (_, i) => {
                acc[
                  `${i}-${colorName}-${shade}`
                ] = `${i}-${colorName}-${shade}`;
              });
            });
          }
          return acc;
        }, {}),
      },
    }
  );
});

module.exports = debugPlugin;