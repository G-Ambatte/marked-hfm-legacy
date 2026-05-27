import markedEslintConfig from '@markedjs/eslint-config';

export default [
  {
    ignores: ['**/lib'],
  },
  {
    rules: {
      /** Errors **/
      camelcase: ['error', { properties: 'never' }],
      'no-array-constructor': 'error',
      'no-iterator': 'error',
      'no-nested-ternary': 'error',
      'no-new-object': 'error',
      'no-proto': 'error',

      /** Warnings **/
      'max-lines': ['warn', { max: 200, skipComments: true, skipBlankLines: true }],
      'max-depth': ['warn', { max: 4 }],
      'max-params': ['warn', { max: 5 }],
      'no-restricted-syntax': ['warn', 'ClassDeclaration', 'SwitchStatement'],
      'no-unused-vars': ['warn', { vars: 'all', args: 'none', varsIgnorePattern: 'config|_|cx|createReactClass' }],

      /** Fixable **/
      'arrow-parens': ['warn', 'always'],
      'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      'no-var': 'warn',
      'prefer-const': 'warn',
      'prefer-template': 'warn',
      quotes: ['warn', 'single', { allowTemplateLiterals: true }],
      semi: ['warn', 'always'],

      /** Whitespace **/
      'array-bracket-spacing': ['warn', 'never'],
      'arrow-spacing': ['warn', { before: false, after: false	}],
      'comma-spacing': ['warn', { before: false, after: true }],
      indent: ['warn', 'tab', { MemberExpression: 'off' }],
      'linebreak-style': 'off',
      'no-trailing-spaces': 'warn',
      'no-whitespace-before-property': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'space-in-parens': ['warn', 'never'],
      'template-curly-spacing': ['warn', 'never'],
      'keyword-spacing': ['warn', {
        before: true,
        after: true,
        overrides: { if: { before: false, after: false } },
      }],
      'key-spacing': ['warn', {
        multiLine: { beforeColon: true, afterColon: true, align: 'colon' },
        singleLine: { beforeColon: false, afterColon: true },
      }],
    },
  },
  ...markedEslintConfig,
];
