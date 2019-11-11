const express = require('express')
const cors = require('cors')
const ScgController = require('./Controllers/ScgController')

const app = express()

app.use(cors())

app.use('/SCG', ScgController)

app.listen(3000, () => {
    console.log('Start server at port 300.')
})