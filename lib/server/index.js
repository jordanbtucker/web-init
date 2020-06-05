require('dotenv/config')
const {once} = require('events')
const config = require('./config')
const app = require('./app')

const host = config.isDev ? config.devServerHost : config.host
const port = config.isDev ? config.devServerPort : config.port

async function run() {
  const server = app.listen(port, host)
  await once(server, 'listening')
  app.setup(server)
  console.log(`Listening at http://${host}:${port}/`)
}

run().catch(err => {
  console.error(err)
  process.exitCode = err.code || 1
})
