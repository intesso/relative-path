# relative-path
returns the absolute path for a given relative path

it's just a tiny helper function:

```js
function getAbsolutePath(relativePath) {
  var dir = path.dirname(module.parent.filename);
  return path.join(dir, relativePath);
};
```

## install

```bash
npm install --save relative-path
```


## use

```js
var p = require('relative-path');

p('./views/login.ejs');
// will return the resolved absolute path.
 ```

## license
MIT
