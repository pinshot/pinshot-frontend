import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import tailwind from 'eslint-plugin-tailwindcss';
import importPlugin from 'eslint-plugin-import';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      turbo: turboPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },

    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          distinctGroup: false,
          groups: [
            ['builtin', 'external'],
            'internal',
            ['parent', 'sibling', 'index'],
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'react/**',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'next',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'next/**',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: '@/shared/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'react/**'],
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
