import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme';

export const decorators = [cssVariablesTheme];

// Storybook parameters
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  cssVariables: {
    files: {
      'Light': `:root {  --background-color: red; }`,
      'Dark': `:root { --background-color: blue; }`,
    },
    defaultTheme: 'Light',
  }
};
