import '../styles.css';
import { action } from '@storybook/addon-actions';

/**
 * html-vite does not support withActions/previewApi.useEffect.
 * This decorator manually attaches DOM event listeners after each story renders,
 * using setTimeout(0) to ensure the story HTML is in the DOM first.
 *
 * Usage in stories: parameters.actions.handles = ['click button', 'focus input']
 * Format: '<eventName> <cssSelector>'   — selector is optional
 */
let _cleanup = [];

const withDOMActions = (storyFn, context) => {
  _cleanup.forEach(fn => fn());
  _cleanup = [];

  const result = storyFn(context);

  const handles = context?.parameters?.actions?.handles;
  if (!handles?.length) return result;

  setTimeout(() => {
    const root = document.getElementById('storybook-root');
    if (!root) return;

    handles.forEach(handle => {
      const spaceIdx = handle.indexOf(' ');
      const eventName = spaceIdx === -1 ? handle : handle.slice(0, spaceIdx);
      const selector  = spaceIdx === -1 ? null   : handle.slice(spaceIdx + 1);
      const fn = action(handle);
      const handler = (e) => {
        if (!selector || e.target?.closest(selector)) fn(e);
      };
      // useCapture=true catches focus/blur which don't bubble
      root.addEventListener(eventName, handler, true);
      _cleanup.push(() => root.removeEventListener(eventName, handler, true));
    });
  }, 0);

  return result;
};

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [withDOMActions],
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
