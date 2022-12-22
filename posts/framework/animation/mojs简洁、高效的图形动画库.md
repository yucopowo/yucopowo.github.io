# mojs简洁、高效的图形动画库
mo.js 是一个简洁、高效的图形动画库，拥有流畅的动画和惊人的用户体验，在任何设备上效果都很好，可以绘制内置或自定义形状，还可以串联多个动画。


```html {demo}
<style>
#bouncyCircle {
width: 500px;
height: 400px;
margin: 0 auto;
}
</style> 
<div id="bouncyCircle"></div> 
<script type="module">  

import mojs from 'https://esm.sh/@mojs/core';

const bouncyCircle = new mojs.Shape({
  parent:       '#bouncyCircle',
  shape:        'circle',
  fill:         {'#F64040': '#FC46AD'},
  radius:       {20: 80},
  duration:     2000,
  isYoyo:       true,
  isShowStart:  true,
  easing:       'elastic.inout',
  repeat:       10,
});

bouncyCircle.play()
</script>
```
