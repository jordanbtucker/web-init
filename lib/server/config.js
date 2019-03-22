const DEFAULT_HOST = '127.0.0.1'
const DEFAULT_PORT = 3000
const DEFAULT_DEV_SERVER_PORT = 8080

const host = process.env.HOST || DEFAULT_HOST
const port = parseInt(process.env.PORT) || DEFAULT_PORT
const devServerHost = process.env.DEV_SERVER_HOST || host
const devClientHost = process.env.DEV_CLIENT_HOST || devServerHost
const devServerPort =
  parseInt(process.env.DEV_SERVER_PORT) || DEFAULT_DEV_SERVER_PORT
const devClientPort = parseInt(process.env.DEV_CLIENT_PORT) || port

module.exports = {
  host,
  port,
  devServerHost,
  devClientHost,
  devServerPort,
  devClientPort,
}
