require('dotenv/config')
const t = require('tap')
const supertest = require('supertest')
const config = require('../../lib/server/config')
const api = require('../../lib/server/api')

const baseURL = `http://${config.host}:${config.port}`

t.test('api', async t => {
  t.beforeEach(done => {
    t.server = api.listen(config.port, config.host, done)
    api.setup(t.server)
  })

  t.afterEach(async () => {
    t.server.close()
  })

  await t.test('200 /messages', async () => {
    await supertest(baseURL)
      .get('/messages')
      .expect(200)
  })
})
