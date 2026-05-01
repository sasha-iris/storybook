import '../styles.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light',  value: '#F9FAFB' },
        { name: 'white',  value: '#FFFFFF' },
        { name: 'dark',   value: '#1F2A37' },
      ],
    },
    docs: {
      source: {
        language: 'html',
      },
    },
  },
};

export default preview;
