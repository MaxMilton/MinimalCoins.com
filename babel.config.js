// https://babeljs.io/docs/usage/api/#options

'use strict';

module.exports = {
  env: {
    test: {
      presets: ['@minna-ui/jest-config/babel-preset.js'],
      plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'h' }]],
    },
  },
};
