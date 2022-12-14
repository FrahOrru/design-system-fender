import { defineCustomElements } from '../loader';
import '../src/design-tokens/css/_variables.css';
import '../src/global.css'
defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: '^on.*|clicked' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
