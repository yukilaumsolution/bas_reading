require("dotenv").config()
const express = require('express')
const app = express()
const authentication =  require('./middleware/authentication')
const cors = require('cors')


// app.use(authentication)
app.use(cors())

app.use("/status", require('./routes/status'))

app.use('*', function (req, res, next) {
    console.log(req.method)
    next()
    return res.status(404).json({ message: 'Not Found!' })
})


app.listen(60000, function () {
    console.log('Server at port 60000')
})