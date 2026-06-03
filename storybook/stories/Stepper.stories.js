// Figma page: Stepper — placeholder, no active design stories identified

export default {
  title: 'Iris Library/Stepper',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `**Stepper** — coming soon. No active design usage identified at this time.

See [SETUP.md](https://github.com/sasha-iris/storybook/blob/main/docs/SETUP.md) for complete installation instructions.
        `,
      },
    },
    controls: { disable: true },
  },
};

export const ComingSoon = {
    name: 'Coming soon',
  parameters: { controls: { disable: true } },
  render: () => `<p style="font-family:inherit;font-size:var(--text-sm);color:var(--color-text-secondary);">Stepper component — placeholder. No stories yet.</p>`,
};
