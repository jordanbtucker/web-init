const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const serveStatic = require('serve-static')
// const middlewarify = require('express-async-handler')
const historyAPIFallback = require('connect-history-api-fallback')
// const nedb = require('nedb')
const socketio = require('@feathersjs/socketio')
const api = require('./api')

const app = express(feathers())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(compression())
app.use(cors())

app.configure(express.rest())
app.configure(socketio({path: '/api/ws'}))

app.configure(api({path: '/api'}))

app.use(historyAPIFallback())

app.use(serveStatic('dist/client'))

app.use(morgan('combined'))
app.use(errorHandler())

module.exports = app
