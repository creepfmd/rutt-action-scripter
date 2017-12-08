var express = require('express')
var replaceKey = require('./include/replaceKey.js')
var replaceValue = require('./include/replaceValue.js')
var addPrefix = require('./include/addPrefix.js')
var addSuffix = require('./include/addSuffix.js')
var calculate = require('./include/calculate.js')
var getRawBody = require('raw-body')
var app = express()

app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: 'utf-8'
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
})

app.post('/webhook/:action', function (req, res) {
  var reqJSON
  reqJSON = JSON.parse(req.text)
  switch (req.params.action) {
    case 'replaceValue':
      res.json(JSON.parse(replaceValue(JSON.stringify(reqJSON), req.query.param1, req.query.param2)))
      break
    case 'replaceKey':
      res.json(JSON.parse(replaceKey(JSON.stringify(reqJSON), req.query.param1, req.query.param2)))
      break
    case 'addPrefix':
      res.json(addPrefix(reqJSON, req.query.param1, req.query.param2))
      break
    case 'addSuffix':
      res.json(addSuffix(reqJSON, req.query.param1, req.query.param2))
      break
    case 'calculate':
      res.json(calculate(reqJSON, req.query.param1, req.query.param2, req.query.param3))
      break
    default:
      res.json({message: 'invalid action'})
      break
  }
})

app.listen(8081, function () {
  console.log('action-scripter listening on port 8081!')
})
