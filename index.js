const htpp = require('http')
const handler = (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Olá, bem bindo ao socket");
}
const server = htpp.createServer(handler)
require('./Service/socket')(server)
server.listen(3000, () => {
    console.log('rodando')
})