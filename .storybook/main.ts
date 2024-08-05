import type { StorybookConfig } from '@storybook/web-components-vite';

let stories = ['../stories/**/*.stories.@(js|jsx|ts|tsx)'];

const config: StorybookConfig = {
  stories,
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    './panel-addon-slots/register.js',
    './panel-addon-cssparts/register.js',
    '@storybook/addon-a11y',
    '@etchteam/storybook-addon-css-variables-theme',
    '@storybook/addon-backgrounds'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;
