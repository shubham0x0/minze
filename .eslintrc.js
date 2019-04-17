module.exports = {
  // extends: "airbnb",
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended',],
  parser: "@typescript-eslint/parser",
  plugins: ['@typescript-eslint'],
  env: {
    jest: true
  },
  rules: {
    "react/no-multi-comp": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "no-console": "off",
    "comma-dangle": "off",
    "react/sort-comp": "off",
    "no-underscore-dangle": "off",
    "react/prefer-stateless-function": "off",
    "no-else-return": "off",
    parserOptions: {
      ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
      },
    },
    // quotes: ["error", "single"],
    // "object-curly-newline": ["error", {
    //     "ObjectExpression": "always",
    //     "ObjectPattern": { "multiline": true },
    //     "ImportDeclaration": "never",
    //     "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    // }],
    "object-curly-newline": "off",
    "global-require": "off",
    'no-unused-vars': 'off',
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-empty-interface": 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  },
  globals: {
    fetch: false
  },
  settings: {
    react: {
      version: 'detect'
    },
  }
};
