const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()
//mongoose.connect('mongodb+srv://aircnc:DMAtGFR8Z0CM1GLF@aircnc-5iwgd.mongodb.net/admin?retryWrites=true&w=majority', {
mongoose.connect('mongodb://aircnc:DMAtGFR8Z0CM1GLF@aircnc-shard-00-00-5iwgd.mongodb.net:27017,aircnc-shard-00-01-5iwgd.mongodb.net:27017,aircnc-shard-00-02-5iwgd.mongodb.net:27017/aircnc?ssl=true&replicaSet=AirCnC-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) //The second parameter is optional, and serves only to remove a warning

app.use(cors('http://localhost:3000'))
app.use(express.json()) //Setup express for json API
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' )))
app.use(routes)


app.listen(3333)