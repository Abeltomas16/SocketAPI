const htpp = require('http')
const handler = (req, res) => {
    res.send("Olá, bem bindo ao socket");
}
const server = htpp.createServer(handler)
server.listen(80, () => {
    console.log('rodando')
})