### 图片与图色处理



```javascript {demo=autojs console}

document.getElementById('screen').style.backgroundImage = 'linear-gradient( #CD853F, #CD69C9)';
var img = captureScreen();
var point = findColor(img, "#ce7a7c", {
    region: [0, 700, 50, 100],
});
console.log(point);
```
