require('dotenv/config')
const sinon = require('sinon')
const tap = require('tap')

const App = require('../lib/app')

tap.test('App', t => {
	t.test('run', t => {
		t.test(`logs 'Hello, $NAME!'`, async t => {
			const message = `Hello, ${process.env.NAME}!`

			const mock = sinon.mock(console)
			mock
				.expects('log')
				.calledWithExactly(message)

			const app = new App()
			await app.run()

			mock.verify()
			mock.restore()
			t.end()
		})
		t.end()
	})
	t.end()
})
