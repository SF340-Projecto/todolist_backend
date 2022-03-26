const http = require('http');
const app = require('./app')
const server = http.createServer(app);

const port = process.env.PORT 

// Server Listen
server.listen(port, () => {
    console.log('Server run on port', port)
})