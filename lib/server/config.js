const DEFAULT_HOST = '127.0.0.1'
const DEFAULT_PORT = 3000
const DEFAULT_DEV_SERVER_PORT = 8080

const isProduction = process.env.NODE_ENV === 'production'
const isTest = process.env.NODE_ENV === 'test'
const isDev = !isProduction && !isTest
const isDevServer = isTruthyEnv('DEV_SERVER')
const host = process.env.HOST || DEFAULT_HOST
const port = parseInt(process.env.PORT) || DEFAULT_PORT
const publicProtocol = process.env.PUBLIC_PROTOCOL
const publicHost = process.env.PUBLIC_HOST
const devServerHost = process.env.DEV_SERVER_HOST || host
const devClientHost = process.env.DEV_CLIENT_HOST || devServerHost
const devServerPort =
  parseInt(process.env.DEV_SERVER_PORT) || DEFAULT_DEV_SERVER_PORT
const devClientPort = parseInt(process.env.DEV_CLIENT_PORT) || port
const ngrokSubdomain = process.env.NGROK_SUBDOMAIN
const ngrokAuthtoken = process.env.NGROK_AUTHTOKEN

function isTruthyEnv(name) {
  return /^(1|true|y(es)?|on|enabled?)$/i.test(process.env[name])
}

module.exports = {
  isProduction,
  isTest,
  isDev,
  isDevServer,
  host,
  port,
  publicProtocol,
  publicHost,
  devServerHost,
  devClientHost,
  devServerPort,
  devClientPort,
  ngrokSubdomain,
  ngrokAuthtoken,
}
