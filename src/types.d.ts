/**
 * Type declarations for Tailwind CSS plugin
 */

// Declaración para el módulo de plugin de Tailwind CSS
declare module 'tailwindcss/plugin' {
  const plugin: any;
  export default plugin;
}

// Declaración para el módulo de colores de Tailwind CSS
declare module 'tailwindcss/colors' {
  interface TailwindColors {
    [key: string]: string | TailwindColors;
    red: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    // Otros colores comunes
    blue: { [key: number]: string };
    green: { [key: number]: string };
    yellow: { [key: number]: string };
    purple: { [key: number]: string };
    // etc.
  }
  
  const colors: TailwindColors;
  export default colors;
}

// Tipos para los objetos de color
interface ColorObject {
  [key: string]: string | ColorObject;
}

interface ColorShades {
  [shade: string]: string;
}

interface ThemeColors {
  [colorName: string]: string | ColorShades;
}

// Tipos para las utilidades del plugin de Tailwind CSS
interface PluginUtils {
  addUtilities: (utilities: Record<string, Record<string, string>>) => void;
  matchUtilities: (
    utilities: Record<string, (value: string) => Record<string, string>>,
    options: { values: Record<string, string> }
  ) => void;
  theme: (path: string) => any;
} 