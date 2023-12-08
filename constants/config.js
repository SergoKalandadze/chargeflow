const dotenv = require('dotenv-flow')
dotenv.config({
    silent: true
})

module.exports = {
    portMain: process.env.PORT_MAIN,
    portMainSSL: process.env.PORT_MAIN_SSL,
    portSocket: process.env.PORT_SOCKET,
    portSocketSSL: process.env.PORT_SOCKET_SSL,
    mongoURL: process.env.MONGO_URL,
    portRedis: process.env.PORT_REDIS,
    redisURL: process.env.REDIS_URL,

}
