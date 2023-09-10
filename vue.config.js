const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.(jpe?g|png)$/i,
					use: [
						{
							loader: 'webp-loader',
							options: {
								quality: 15,
							},
						},
					],
				},
			],
		},
	},
})
