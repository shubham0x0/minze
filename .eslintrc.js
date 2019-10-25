module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  extends: [
    // '@react-native-community',
    'prettier/@typescript-eslint',
    'react-native'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  plugins: ['@typescript-eslint'],
  env: {
    jest: true
  },
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'import/default': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-commonjs': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-namespace': 'warn',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'warn',
    'no-else-return': 'off',
    'no-empty-function': 'off',
    'no-invalid-this': 'off',
    'no-case-declarations': 'off',
    'class-methods-use-this': 'off',
    'no-undef': 'warn',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react-native/no-color-literal': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/no-unused-styles': 'off',
    'react-native/sort-styles': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-multi-comp': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    semi: 'off'
  },
  globals: {
    __DEV__: false,
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    describe: false,
    expect: false,
    it: false,
    jasmine: false,
    jest: false,
    test: false,
    device: false,
    waitFor: false,
    element: false,
    by: false
  }
};
