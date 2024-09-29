module.exports = {
  parserOptions: {
    project: ['./tsconfig.json', './jsconfig.json'],
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-bitwise': 'off'
  },
  extends: [
    'next/core-web-vitals',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
};
