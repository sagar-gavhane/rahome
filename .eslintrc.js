module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:sonarjs/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: ['sonarjs'],
  rules: {},
  settings: {
    react: {
      version: '999.999.999',
    },
  },
}