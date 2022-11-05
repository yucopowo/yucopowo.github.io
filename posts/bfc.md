
BFC就是一个隔离的独立布局容器

### 直接看使用场景

```html
<style>
    .container {
        background: #000;
        min-height: 50px;
    }
    .box {
        margin: 100px;
        width: 100px;
        height: 100px;
        background: red;
        float: left;
    }
</style>
<div id="example1" style="height: 300px;border: 1px solid lightgray;">

    <div  class="container">
        <div class="box"></div>
        <div class="box"></div>
    </div>

</div>
```

<blog-example-previewer src="/examples/bfc/demo1.html"></blog-example-previewer>

### 怎样触发BFC
这里简单列举几个触发BFC使用的CSS属性

-    overflow: hidden
-    display: inline-block
-    position: absolute
-    position: fixed
-    display: table-cell
-    display: flex


### BFC的规则

- BFC就是一个块级元素，块级元素会在垂直方向一个接一个的排列
- BFC就是页面中的一个隔离的独立容器，容器里的标签不会影响到外部标签
- 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
- 计算BFC的高度时，浮动元素也参与计算
