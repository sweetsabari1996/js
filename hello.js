var express = require('express')
var path=require('path')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
console.log("hi")
app.use('/node' , express.static(path.join(__dirname, 'node')))
app.use(express.static(__dirname));
console.log(__dirname)
app.listen(4000)