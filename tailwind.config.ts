import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.blur-4px': {
          backdropFilter: 'blur(4px)',
        },
        '.blur-8px': {
          backdropFilter: 'blur(4px)',
        },
        '.blur-30px': {
          backdropFilter: 'blur(30px)',
        },
        '.blur-60px': {
          backdropFilter: 'blur(60px)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  daisyui: {
    themes: [
      'dark',
      'light',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
};
export default config;
