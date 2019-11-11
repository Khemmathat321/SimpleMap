const express = require('express')
const request = require('request');

const app = express()

app.get('/', (req, res) => {
    request(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.search}&key=AIzaSyDlTlc6M2RVMd0gFLnG4mylNPQOBTgUtwc`,
        function (error, response, body) {
            res.send(body)
        }
    )
})

module.exports = app