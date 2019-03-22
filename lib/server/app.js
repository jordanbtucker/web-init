const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const serveStatic = require('serve-static')
// const middlewarify = require('express-async-handler')
const historyAPIFallback = require('connect-history-api-fallback')
const api = require('./api')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(compression())
app.use(cors())

app.use('/api', api)

app.use(historyAPIFallback())

app.use(serveStatic('dist/client'))

app.use(morgan('combined'))
app.use(errorHandler())

app.setup = server => {
  api.setup(server)
}

module.exports = app
