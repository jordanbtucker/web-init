const debug = require('debug')('node-init')

module.exports = class App {
	async run () {
		const message = await Promise.resolve(`Hello, ${process.env.NAME}!`)
		debug('message: %s', message)
		console.log(message)
	}
}
