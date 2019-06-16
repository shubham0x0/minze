module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  extends: [
    'standard',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'prettier/@typescript-eslint'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  env: {
    jest: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-else-return': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    semi: 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'react-native/no-raw-text': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'react/display-name': 'off',
    'react/no-string-refs': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literal': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-unused-styles': 'off',
    'handle-callback-err': 'warn'
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
    test: false
  }
};
