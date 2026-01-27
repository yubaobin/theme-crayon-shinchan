import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        node: true
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'prettier': prettier
    },
    rules: {
      // TypeScript 规则
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_'
        }
      ],

      // 通用规则
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
      'space-before-function-paren': 'off',
      'space-before-blocks': 'error',
      'keyword-spacing': 'error',
      'no-unreachable-loop': 'off',

      // Prettier 规则
      'prettier/prettier': 'error'
    }
  },
  {
    ignores: ['templates/**/*.html', 'templates/assets', 'node_modules']
  }
]
