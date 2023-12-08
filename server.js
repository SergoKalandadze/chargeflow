const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const shared = require('./constants/shared')
const { portMain, portMainSSL, hostName } = require('./constants/config')
const purchase = require('./routes/purchase.route')

app.use(cors())

app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({limit:'5mb', extended:true}))

app.get('/checking', (req, res) => {

    res.json({"message": "Welcome To The Server!"})

})

app.use('/api/v1/purchase', purchase)

if (shared.USE_SSL) {

    const httpsOptions = {
        cert: fs.readFileSync('./ssl/certificate.crt'),
        ca: fs.readFileSync('./ssl/ca_bundle.crt'),
        key: fs.readFileSync('./ssl/private.key'),
    }

    const httpsServer = https.createServer(httpsOptions, app)

    httpsServer.listen(portMainSSL, hostName, () => {
        console.log('SSL server is running on port', portMainSSL)
    })

} else {

    const httpServer = http.createServer(app)

    httpServer.listen(portMain, () => {
        console.log('Server is running on port', portMain)
    })

}


