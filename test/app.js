require('dotenv/config')
const sinon = require('sinon')
const tap = require('tap')

const App = require('../lib/app')

tap.test('App', async t => {
  await t.test('run', async t => {
    await t.test(`logs 'Hello, $NAME!'`, async () => {
      const message = `Hello, ${process.env.NAME}!`

      const mock = sinon.mock(console)
      mock.expects('log').calledWithExactly(message)

      const app = new App()
      await app.run()

      mock.verify()
      mock.restore()
    })
  })
})
