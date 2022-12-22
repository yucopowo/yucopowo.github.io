# [sphinx]




# SphinxJS
A very light JS library which could encode a string to an image, or decode an image to a string.

## Usage
Install SphinxJS from npm
```shell
npm install sphinx.js
```

Use `<script></script>` tags

```html
<script src="sphinx.js"></script>
```

> Mind that `SphinxJS` uses ES2015 `Promise` and other amazing features, which means that it requires your browser's support.
> If not, you might use 'Babel' or something else to build your code.


> `SphinxJS` also supports `AMD`, `CommonJS` and `ES6 Modules`

## Encode
Defined a string as `Hello Sphinx!`, and we're going to encode it.

```javascript
let base64URL = new Sphinx().encode('Hello Sphinx!')
```

Then the `base64URL` is equal to

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=
```
, the string information has encoded to an image successfully.

As you see, the `encode()` function returns a base64 url of an image.

## Decode
Defined an image url

```javascript
let url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAJklEQVQYV2P0SM35r8K1heE5owcDY2Zexf8dezYxcDIwMDAyIAEA7EYIq6UNAkYAAAAASUVORK5CYII=`
```

Now decode it!
```javascript
new Sphinx().decode(url)
	.then((info) => {
		console.log(info) // Hello Sphinx!
	})
```

The `decode()` function returns a `Promise`, which includes the string information decoded from the image.

## Config
The `new Sphinx()` could recieve a config object to select the type of the image it created.
- config {Object} `optional` `default: {img: 'png'}`

```javascript
new Sphinx({img: 'bmp'})
```

## License
MIT




```javascript {demo type=module container=root}
import Sphinx from 'https://esm.sh/sphinx.js';


const sphinx = new Sphinx();

const message = window.top.document.querySelector('.markdown-body').innerText;

let base64URL = sphinx.encode(message)

const img = document.createElement('img');
img.src = base64URL;

const container = document.getElementById('root');
container.style.border = '1px solid';
container.style.textAlign = 'center';
container.style.display = 'flex';
container.style.justifyContent = 'center';
    
container.appendChild(img);


console.log( await sphinx.decode(base64URL) );



```


[sphinx]: https://github.com/jrainlau/sphinx


