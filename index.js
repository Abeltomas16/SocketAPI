const htpp = require('http')
const handler = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Olá, bem vindo ao socket");
}
const server = htpp.createServer(handler)
require('./Service/socket')(server)
server.listen(80, "0.0.0.0")