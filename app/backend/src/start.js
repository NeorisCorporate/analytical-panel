const server = require('./config/server');

server.listen(process.env.PORT, process.env.HOST, () => console.log(`SERVIDOR RODANDO EM http://${process.env.HOST}:${process.env.PORT} :´)`));