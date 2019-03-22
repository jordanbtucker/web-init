require('dotenv/config')
const config = require('./config')
const app = require('./app')

const isDev = process.env.NODE_ENV !== 'production'
const host = isDev ? config.devServerHost : config.host
const port = isDev ? config.devServerPort : config.port

const server = app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}/`)
})

app.setup(server)
