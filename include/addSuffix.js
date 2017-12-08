var jsonpath = require('jsonpath')

var performAction = function (body, key, suffix) {
  jsonpath.apply(body, key, function (value) {
    if ((typeof value) === 'string') {
      return value + suffix
    }
    return value
  })
  return body
}

module.exports = performAction
