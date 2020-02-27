// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint'
  },

  env: {
    browser: true,
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'standard',
    '@vue/standard'
  ],

  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  // add your custom rules here
  rules: {
    eqeqeq: 'off',
    'space-before-function-paren': [
      'error',
      'never'
    ],
    semi: [
      'error',
      'always'
    ],
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off'
  },

  // Global variables
  "globals": {
    "uni": "readonly"
  }
}
