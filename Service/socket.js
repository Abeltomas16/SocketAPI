const socket = require('socket.io')
function factorySocket(server) {
    const io = socket(server, {
        origin: "*",
        Credential: false
    })
    io.on("connection", (host) => {
        host.on("location", ({ localizacao }) => {
            host.broadcast.emit("newlocation", localizacao)
        })
    })
}
module.exports = factorySocket