var path = require('path');
module.exports = function getAbsolutePath(relativePath) {
  var dir = path.dirname(module.parent.filename);
  return path.join(dir, relativePath);
};