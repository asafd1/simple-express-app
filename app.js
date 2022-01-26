const fs = require('fs')
const https = require('https')
const express = require('express')
const app = express()
const port = 443

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

var privateKey = fs.readFileSync( '/etc/letsencrypt/live/pingone.mobile.ping-eng.com/privkey.pem' );
var certificate = fs.readFileSync( '/etc/letsencrypt/live/pingone.mobile.ping-eng.com/fullchain.pem' );

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))
