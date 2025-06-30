// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
module.exports = {
  extends: ['plugin:react-hooks/recommended'],
  plugins: ['react', 'react-hooks', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 'off',
  },
  env: {
    'react-native/react-native': true,
  },
};
