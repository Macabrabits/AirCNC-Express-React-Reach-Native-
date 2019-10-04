const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
mongoose.connect('mongodb+srv://aircnc:DMAtGFR8Z0CM1GLF@aircnc-5iwgd.mongodb.net/admin?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) //The second parameter is optional, and serves only to remove a warning

app.use(express.json()) //Setup express for json API
app.use(routes)

//DMAtGFR8Z0CM1GLF


app.listen(3333)