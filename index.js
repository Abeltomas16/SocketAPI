const htpp = require('http')
const handler = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Olá, bem vindo ao socket");
}
const server = htpp.createServer(handler)
require('./Service/socket')(server)
server.listen(4000, "0.0.0.0")