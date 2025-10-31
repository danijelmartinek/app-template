import nextLintConfig from 'eslint-config-next';

export default [
  ...nextLintConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'import/no-anonymous-default-export': 'off'
    }
  }
];
