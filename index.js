const htpp = require('http')
const port = process.env.PORT || 4000
const handler = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Olá, bem vindo ao socket");
}
const server = htpp.createServer(handler)
require('./Service/socket')(server)
server.listen(port, "0.0.0.0")