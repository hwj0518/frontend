/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard"', 'sans-serif'],
      },
      colors: {
        text: {
          primary: '#222222',
          secondary: '#5F5F5F',
          placeholder: '#A9A9A9',
        },
        border: {
          chip: '#E3E3E3',
          line: '#EDEDED',
        },
        button: {
          abled: '#0B0B0B',
          disabled: '#A9A9A9',
        },
        background: {
          card: '#FFFFFF',
          screen: '#F1F3FA',
          field: '#F8F9FC',
        },
        dropdown: '#F8F8F8',
        input: '#2E7CF6',
      },
      boxShadow: {
        alarmShadow: '0px 4px 16px rgba(0, 0, 0, 0.04)',
        cardShadow: '0px 0px 1px rgba(0, 0, 0, 0.08)',
        emphasizeShadow:
          '0px 2px 8px 0px rgba(0, 0, 0, 0.12), 0px 1px 4px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)',
        bottomSheetShadow: '0px -4px 24px rgba(3.67, 21.75, 48.87, 0.25)',
        yellowShadow:
          '0px 218px 61px 0px rgba(152, 147, 81, 0.00), 0px 139px 56px 0px rgba(152, 147, 81, 0.01), 0px 78px 47px 0px rgba(152, 147, 81, 0.05), 0px 35px 35px 0px rgba(152, 147, 81, 0.09), 0px 9px 19px 0px rgba(152, 147, 81, 0.10)',
        subHeaderShadow:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)',
        languageCardShadow:
          '0px 218px 61px 0px rgba(152, 147, 81, 0.00), 0px 139px 56px 0px rgba(152, 147, 81, 0.01), 0px 78px 47px 0px rgba(152, 147, 81, 0.05), 0px 35px 35px 0px rgba(152, 147, 81, 0.09), 0px 9px 19px 0px rgba(152, 147, 81, 0.10)',
        inputFieldShadow: '0px 1px 2px 0px rgba(107, 110, 116, 0.04)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addComponents }) {
      addComponents({
        // Typography System
        '.heading-1': {
          fontSize: '22px',
          lineHeight: '140%',
          fontWeight: '600',
        },
        '.heading-2': {
          fontSize: '20px',
          lineHeight: '140%',
          fontWeight: '600',
        },
        '.subtle1-medium': {
          fontSize: '18px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.subtle1-regular': {
          fontSize: '18px',
          lineHeight: '150%',
          fontWeight: '400',
        },
        '.subtle2-bold': {
          fontSize: '16px',
          lineHeight: '150%',
          fontWeight: '700',
        },
        '.subtle2-semibold': {
          fontSize: '16px',
          lineHeight: '150%',
          fontWeight: '600',
        },
        '.subtle2-medium': {
          fontSize: '16px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.subtle2-regular': {
          fontSize: '16px',
          lineHeight: '150%',
          fontWeight: '400',
        },
        '.body1-medium': {
          fontSize: '15px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.body1-regular': {
          fontSize: '15px',
          lineHeight: '150%',
          fontWeight: '400',
        },
        '.body2-medium': {
          fontSize: '14px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.body2-regular': {
          fontSize: '14px',
          lineHeight: '150%',
          fontWeight: '400',
        },
        '.body3-medium': {
          fontSize: '13px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.body3-regular': {
          fontSize: '13px',
          lineHeight: '150%',
          fontWeight: '400',
        },
        '.body4-medium': {
          fontSize: '12px',
          lineHeight: '150%',
          fontWeight: '500',
        },
        '.body4-regular': {
          fontSize: '12px',
          lineHeight: '150%',
          fontWeight: '400',
        },

        // Color System
        '.text-primary': {
          color: '#222222',
        },
        '.text-secondary': {
          color: '#5F5F5F',
        },
        '.text-placeholder': {
          color: '#A9A9A9',
        },
        '.border-chip': {
          borderColor: '#E3E3E3',
        },
        '.border-line': {
          borderColor: '#EDEDED',
        },
        '.bg-button-abled': {
          backgroundColor: '#0B0B0B',
        },
        '.bg-button-disabled': {
          backgroundColor: '#A9A9A9',
        },
        '.bg-card': {
          backgroundColor: '#FFFFFF',
        },
        '.bg-screen': {
          backgroundColor: '#F1F3FA',
        },
        '.bg-field': {
          backgroundColor: '#F8F9FC',
        },
        '.bg-dropdown': {
          backgroundColor: '#F8F8F8',
        },
        '.input-focus': {
          borderColor: '#2E7CF6',
          outline: 'none',
        },
      });
    },
  ],
};
