# relative-path
returns the absolute path for a given relative path

it's just a tiny helper function:

```js
function getAbsolutePath() {
  var dir = path.dirname(module.parent.filename);
  var pathArgs = [dir].concat(Array.prototype.splice.call(arguments, 0));
  return path.join.apply(path, pathArgs);
};
```

## install

```bash
npm install --save relative-path
```


## use

```js
var p = require('relative-path');

// will return the resolved absolute path.
p('./views/login.ejs');

// or
p('./views', 'login.ejs')
 ```

## license
MIT
