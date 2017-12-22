import http = require('http')
import debug = require('debug')
import paht = require('path')
import fs = require('fs')
const app = require('./app')

// Get listening port number
let listenPort = normalizePort( process.env.PORT || '3000' )

// Create server
let server = http.createServer(app.callback())
// listening the port
server.listen(listenPort)
// on error message
server.on('error', onError)
server.on('listening', () => {
  let addr = server.address()
  let bind = typeof addr === 'string' ? `pip ${addr}` : `port ${addr.port}`
  debug(`Listening on ${bind}`)
})

function normalizePort (val: any) {
  let port = parseInt(val, 10)

  if (isNaN(port)) return val
  if (port >= 0) return port
  return 3000
}

function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof listenPort === 'string' ? `Pipe ${listenPort}` : `Port ${listenPort}`
  switch (error.code) {
    case 'EACCES' :
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE' :
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default :
      throw error
  }
}