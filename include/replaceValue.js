var jsonpath = require('jsonpath')

var performAction = function (body, key, newValue) {
  jsonpath.apply(body, key, function (value) {
    return newValue
  })
  return body
}

module.exports = performAction
