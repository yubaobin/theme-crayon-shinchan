module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  env: {
    node: true
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error'],
    semi: ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'eol-last': ['error'],
    'space-in-parens': ['error'],
    'no-multi-spaces': ['error'],
    'no-trailing-spaces': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': 'error',
    'keyword-spacing': 'error',
    'no-unreachable-loop': 'off',
    'no-unused-vars': [
      'error',
      {
        caughtErrors: 'none',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
  }
}
