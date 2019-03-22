const express = require('@feathersjs/express')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio')
const memory = require('feathers-memory')

const api = express(feathers())
api.configure(express.rest())
api.configure(socketio({path: '/api/ws'}))

api.use('/messages', memory())

module.exports = api
