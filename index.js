var path = require('path');
module.exports = function getAbsolutePath() {
  var dir = path.dirname(module.parent.filename);
  var pathArgs = [dir].concat(Array.prototype.splice.call(arguments, 0));
  return path.join.apply(path, pathArgs);
};
