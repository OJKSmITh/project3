const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./routes')

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.static("./uploads"))
app.use(express.json())
app.use(cookieParser())

app.use(router)


module.exports= app