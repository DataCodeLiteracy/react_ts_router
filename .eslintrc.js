module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off'
      }
    },
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  ignorePatterns: ['*.config.js'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react']
}
