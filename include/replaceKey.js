
var performAction = function (body, keyToBeReplaced, keyToReplacedWith) {
  return body.split('"' + keyToBeReplaced + '":').join('"' + keyToReplacedWith + '":')
}

module.exports = performAction
