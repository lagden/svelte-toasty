import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginSvelte from 'eslint-plugin-svelte'
import * as eslintrc from '@eslint/eslintrc'
import js from '@eslint/js'

const es2024 = eslintrc.Legacy.environments.get('es2024')

export default [
	{
		...js.configs.recommended,
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...es2024.globals,
			},
			parserOptions: {
				...es2024.parserOptions,
			},
		},
	},
	...eslintPluginSvelte.configs['flat/recommended'],
	...[eslintConfigPrettier],
	{
		rules: {
			camelcase: 'off',
			'capitalized-comments': 'off',
			indent: ['error', 'tab'],
			'linebreak-style': ['error', 'unix'],
			'no-console': 'off',
			'no-debugger': 'off',
			'no-undef-init': 'off',
			'no-unused-expressions': [
				'error',
				{
					allowShortCircuit: true,
					allowTernary: true,
					allowTaggedTemplates: true,
				},
			],
			'padding-line-between-statements': 'off',
			quotes: ['error', 'single'],
			semi: ['error', 'never'],
			'semi-spacing': [
				'error',
				{
					before: false,
					after: true,
				},
			],
			'spaced-comment': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-useless-undefined': 'off',
			'unicorn/no-zero-fractions': 'off',
			'unicorn/prefer-includes': 'off',
			'unicorn/prefer-query-selector': 'off',
			'unicorn/prevent-abbreviations': 'off',
			// override
			'svelte/no-at-html-tags': 'off',
		},
	},
	{
		// prettier-ignore
		ignores: [
			// Dir
			'**/node_modules/',
			'.conf/',
			'.github/',
			'.svelte-kit/',
			'.vite/',
			'bin/',
			'build/',
			'coverage/',
			'dist/',
			'logs/',
			'resource/',

			// File
			'.DS_Store',
			'*-lock.*',
			'*.lock',
			'*.log',
			'*.log*',
			'.env*',
			'.registry-*',
			'_cleanup',
			'_init',
			'vite.config.js.timestamp-*',
		],
	},
]
