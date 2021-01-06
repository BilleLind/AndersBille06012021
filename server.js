const http = require('http');
const app = require('./app')

const port = 3963

const server = http.createServer(app)



server.listen(port)