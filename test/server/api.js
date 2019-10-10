require('dotenv/config')
const t = require('tap')
const supertest = require('supertest')
const config = require('../../lib/server/config')
const app = require('../../lib/server/app')

const baseURL = `http://${config.host}:${config.port}`

t.test('api', async t => {
  t.beforeEach(done => {
    t.server = app.listen(config.port, config.host, done)
  })

  t.afterEach(async () => {
    t.server.close()
  })

  await t.test('200 /api/messages', async () => {
    await supertest(baseURL)
      .get('/api/messages')
      .expect(200)
  })
})
