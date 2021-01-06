//her importere jeg modulet hyperText transfer protocol
const http = require('http');
//her importere jeg middelware app som jeg selv har skabt, hvori jeg anvender express
const app = require('./app')

const port = 3963

//på et server object skaber jeg en http server som er forbundet med app
const server = http.createServer(app)



server.listen(port)