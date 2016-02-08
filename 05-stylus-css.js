var path = require('path')
var stylus = require('stylus')
var express = require('express')

var app = express()

app.use(require('stylus').middleware(__dirname + '/05'))

app.use(express.static(path.join(__dirname, '/05')))


app.listen(process.argv[2])