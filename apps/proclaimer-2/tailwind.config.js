const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import { tailwindGlobal } from '@services';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: "class",
  theme: { extend: { ...tailwindGlobal.theme.extend } },
  container: { ...tailwindGlobal.container },
  plugins: [...tailwindGlobal.plugins],
};
