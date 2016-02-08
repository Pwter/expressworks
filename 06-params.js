var crypto = require('crypto')
var express = require('express')

var app = express()


app.put('/message/:NAME', function(req, res) {
    var output = crypto.createHash('sha1')
        .update(new Date().toDateString()+req.params.NAME)
        .digest('hex')
    res.end(output)
    
})

app.listen(process.argv[2])