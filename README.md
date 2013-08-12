# Mincer HBS

Handlebars JST engine for [Mincer](https://github.com/nodeca/mincer).


## Installation

Install from npm registry:

```
$ npm install mincer-hbs
```


## Usage

Attach the engine to the Mincer library:

```js
var Mincer = require('mincer');

require('mincer-hbs')(Mincer);
```

Mincer will now process files with a `.jst.hbs` extension.

**Note:** You must include the [Handlebars runtime](http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0/handlebars.runtime.js) to render precompiled templates.


## Running Tests

```
$ npm install
$ make test
```


## License

The MIT License (MIT)

Copyright © 2013 <jw@jeremyworboys.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
