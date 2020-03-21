module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:lodash/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['lodash', 'sonarjs'],
  rules: {
    'lodash/prefer-lodash-method': [2, { ignoreMethods: ['map'] }],
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
}
