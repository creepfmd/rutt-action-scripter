var jsonpath = require('jsonpath')

var performAction = function (body, key, prefix) {
  jsonpath.apply(body, key, function (value) {
    if ((typeof value) === 'string') {
      return prefix + value
    }
    return value
  })
  return body
}

module.exports = performAction
