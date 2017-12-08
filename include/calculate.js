var jsonpath = require('jsonpath')

var performAction = function (body, key, operation, rightPart) {
  var parsedRightPart = parseFloat(rightPart)
  if (parsedRightPart !== 'NaN') {
    jsonpath.apply(body, key, function (value) {
      if ((typeof value) === 'number') {
        switch (operation) {
          case '+':
            return value + rightPart
          case '-':
            return value - rightPart
          case '*':
            return value * rightPart
          case '/':
            return value / rightPart
          case '^':
            return Math.pow(value, rightPart)
          default:
            return value
        }
      }
      return value
    })
  }
  return body
}

module.exports = performAction
