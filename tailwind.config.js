/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#e0f4f5',
          '100': '#b3e2e6',
          '200': '#80ccd2',
          '300': '#4eb6be',
          '400': '#28a3ae',
          '500': '#028090',    // Main teal for primary
          '600': '#027585',
          '700': '#026a78',
          '800': '#015760',
          '900': '#004449',
          '950': '#003235'
        },
        secondary: {
          '50': '#fff4e6',
          '100': '#ffe3bf',
          '200': '#ffd199',
          '300': '#f6bd60',    // Main amber for secondary
          '400': '#d9a551',
          '500': '#b78342',
          '600': '#8e652e',
          '700': '#704e23',
          '800': '#543b19',
          '900': '#382610',
          '950': '#1f1408'
        },
        neutral: {
          '50': '#f7f9fb',
          '100': '#edf1f4',
          '200': '#d8dee3',
          '300': '#c2cad1',
          '400': '#a5adb8',
          '500': '#89909e',    // Main neutral color
          '600': '#707785',
          '700': '#565d69',
          '800': '#3d434b',
          '900': '#26292d',
          '950': '#121416'
        },
        success: {
          '50': '#e0f2f1',
          '100': '#b3ded8',
          '200': '#80c9be',
          '300': '#4db3a3',
          '400': '#26a491',
          '500': '#009879',    // Main green for success
          '600': '#00886f',
          '700': '#00765e',
          '800': '#005c46',
          '900': '#004033',
          '950': '#00251b'
        },
        warning: {
          '50': '#fff8e5',
          '100': '#ffecbf',
          '200': '#ffde99',
          '300': '#ffcf7f',
          '400': '#ffc265',
          '500': '#ffb703',    // Bright yellow-orange for warning
          '600': '#d99a02',
          '700': '#b37d02',
          '800': '#8c6201',
          '900': '#664700',
          '950': '#4f3600'
        },
        error: {
          '50': '#fdeceb',
          '100': '#fbd5d3',
          '200': '#f8bbb8',
          '300': '#f49b95',
          '400': '#f17d73',
          '500': '#d62828',    // Bold red for error
          '600': '#b72121',
          '700': '#981b1b',
          '800': '#761515',
          '900': '#520f0f',
          '950': '#410b0b'
        }
      },
      fontSize: {
        // heading 1
        'h1-bold': ['30px', { lineHeight: '1.3', fontWeight: '700' }],
        'h1-semi-bold': ['30px', { lineHeight: '1.3', fontWeight: '600' }],
        'h1-extra-bold': ['3-px', { lineHeight: '1.3', fontWeight: '800' }],
        // heading 2
        'h2-bold': ['24px', { lineHeight: '1.35', fontWeight: '700' }],
        'h2-semi-bold': ['24px', { lineHeight: '1.35', fontWeight: '600' }],
        'h2-extra-bold': ['24px', { lineHeight: '1.35', fontWeight: '800' }],
        // heading 3 
        'h3-bold': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
        'h3-semi-bold': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3-extra-bold': ['18px', { lineHeight: '1.4', fontWeight: '800' }],
        // heading 4
        'h4-bold': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'h4-semi-bold': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'h4-extra-bold': ['16px', { lineHeight: '1.5', fontWeight: '800' }],
        // subheading
        'subheading-medium': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'subheading-semi-bold': ['16px', { lineHeight: '1.5', fontWeight: '600' }],
        'subheading-bold': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        // body / paragraph 
        'body-regular': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-semi-bold': ['16px', { lineHeight: '1.6', fontWeight: '600' }],
        'body-bold': ['16px', { lineHeight: '1.6', fontWeight: '700' }],
        // caption
        'caption-regular': ['14px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption-semi-bold': ['14px', { lineHeight: '1.4', fontWeight: '600' }],
        'caption-bold': ['14px', { lineHeight: '1.4', fontWeight: '700' }],
        // small
        'small-regular': ['12px', { lineHeight: '1.6', fontWeight: '400' }],
        'small-semi-bold': ['12px', { lineHeight: '1.6', fontWeight: '600' }],
        'small-bold': ['12px', { lineHeight: '1.6', fontWeight: '700' }],
      }, 
    },
  },
  plugins: [],
}

