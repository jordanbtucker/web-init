import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

const api = feathers()
api.configure(socketio(io({path: '/api/ws'})))

export default api
