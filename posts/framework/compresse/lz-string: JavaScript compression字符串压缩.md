# [lz-string]

```javascript {demo type=module}
import * as LZString from 'https://esm.sh/lz-string';

var string = "This is my compression test.";
console.log("Size of sample is: " + string.length);
var compressed = LZString.compress(string);
console.log("Size of compressed sample is: " + compressed.length);
string = LZString.decompress(compressed);
console.log("Sample is: " + string);
```


https://pieroxy.net/blog/pages/lz-string/index.html

[lz-string]: https://github.com/pieroxy/lz-string
