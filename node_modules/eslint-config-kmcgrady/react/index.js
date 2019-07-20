'use strict';

module.exports = {
  extends: 'kmcgrady/core',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },

  plugins: [
    'react'
  ],

  rules: require('../rules/react')
};
