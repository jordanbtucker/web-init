const memory = require('feathers-memory')

module.exports = ({path}) => app => {
  app.use(`${path}/messages`, memory())
}
