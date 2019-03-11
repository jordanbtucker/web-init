const eslintPluginNode = require('eslint-plugin-node')

module.exports = {
	root: true,
	env: {
		es6: true,
	},
	extends: 'standard',
	parserOptions: {
		ecmaVersion: 2018,
	},
	plugins: [
		'standard',
	],
	rules: {
		'array-bracket-spacing': [
			'error',
			'never',
		],
		'arrow-parens': [
			'error',
			'as-needed',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'indent': [
			'error',
			'tab',
		],
		'no-tabs': 'off',
		'no-unused-vars': [
			'error',
			{
				'argsIgnorePattern': '^_',
				'varsIgnorePattern': '^_',
				'caughtErrorsIgnorePattern': '^_',
			},
		],
		'object-curly-spacing': [
			'error',
			'never',
		],
	},
	overrides: [
		// Workaround for https://github.com/eslint/eslint/issues/8813
		Object.assign({}, eslintPluginNode.configs.recommended, {
			files: [
				'lib/**',
				'test/**',
			],
			rules: Object.assign({}, eslintPluginNode.configs.recommended.rules, {
				'no-process-exit': 'off',
				'node/prefer-global/buffer': 'error',
				'node/prefer-global/console': 'error',
				'node/prefer-global/process': 'error',
				'node/prefer-global/text-decoder': 'error',
				'node/prefer-global/text-encoder': 'error',
				'node/prefer-global/url': 'error',
				'node/prefer-global/url-search-params': 'error',
			}),
		}),
	],
}
