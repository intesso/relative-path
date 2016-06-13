var p = require('..');
var test = require('tape');

test('return the resolved absolute path.', function (t) {
  var result = p('./views/login.ejs');
  var expected = __dirname + '/views/login.ejs';

  t.equal(result, expected);
  t.end();
})

test('accept multiple arguments.', function (t) {
  var result = p('test', 'index.js');
  var expected = __dirname + '/test/index.js';

  t.equal(result, expected);
  t.end();
})
