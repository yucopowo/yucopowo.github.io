# markdown内置code模板

## code扩展语法

```markdown
lang {demo=[preview|editor] template=[react|vue]}
```

### 语言(lang)
```markdown
    ```html
    ```

    ```javascript
    ```    

    ```javascript {type=module} 
    ``` 
 
    ```jsx
    export default () => {
        return (
            <div>App</div>
        );
    }
    ``` 
    
    ```tsx
    ``` 
    
    ```typescript
    ```    

    ```html
    ```

    ```vue
    ``` 
```


### demo
```markdown

    ```html {demo}
    ```
    
    ```html {demo=preview}
    ```

    ```javascript {demo=editor}
    ```
```

### template
```markdown
    ```jsx {template=react}
    ```

    ```jsx {template=react@17.0.2}
    ```

    ```tsx {template=react}
    ``` 
```


|模板|-|-|-|
|-|-|-|-|
|-|-|-|-|
template
typescript 擦除类型 es6 执行


react 版本号 react@17.0.2
vue 版本号 react@17.0.2

## javascript代码

**markdown语法**
```markdown
    普通JavaScript
    ```javascript {demo}
    const root = document.createElement('div');
    document.body.appendChild(root);
    document.body.style.backgroundColor = 'yellow';
    root.innerHTML = _.camelCase('hello javascript模板');
    ```

    esm
    ```javascript | demo | type=module
    ```
```


```javascript {demo type=module}
import _ from 'https://esm.sh/lodash';
const root = document.createElement('div');
document.body.appendChild(root);
document.body.style.backgroundColor = 'yellow';
root.innerHTML = _.camelCase('hello javascript模板');
```


```typescript {demo}
import _ from 'https://esm.sh/lodash';
function getName(name: string): string {
    return _.camelCase(name);
}
const a: string = getName('hello typescript');
const root: HTMLElement = document.createElement('root');
document.body.appendChild(root);
root.innerHTML = a;
```


## html代码



**markdown语法**
```markdown
    ```html {demo}
    ```
```

```html {demo}
<html>
    
<head>
    <style>
        body {
            height: 100px;
            background-color: blue;
        }
    </style> 
</head>

<body>
    <div id="root">"html模板"</div> 
    
    <script type="module">
        import _ from 'https://esm.sh/lodash';
        const root = document.getElementById('root');
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            root.innerHTML = _.camelCase('hello html模板');
        }, 3000);
    </script>
</body>

</html>
```



## React组件

### 默认最新版本

**markdown语法**
```markdown
    ```jsx {demo}
    ```
```

```jsx {demo}
import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    color: red;
`;

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <Wrapper>
            <div>hello react component count = {count}</div>
            <button onClick={()=>{
                setCount(count+1);
            }}>add</button>
        </Wrapper>

    );
};

export default App;
```


### antd
```jsx {demo}
import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    );
};

export default App;
```



### 历史版本17.0.2

**markdown语法**
```markdown
    ```jsx | demo | react=17.0.2
    import React, { useState } from 'react';
    const App = () => {
        const [count, setCount] = useState(0);
        return (
            <Wrapper>
                <div>hello react component count = {count}</div>
                <button onClick={()=>{
                    setCount(count+1);
                }}>add</button>
            </Wrapper>
        );
    };
    export default App;
    ```
```

```jsx {demo react=17.0.2}
import React, { useState } from 'react';
const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>hello react component count = {count}</div>
            <button onClick={()=>{
                setCount(count+1);
            }}>add</button>
        </div>
    );
};
export default App;
```



## Vue组件

```html {demo vue=3}
<template>
  <div class="hello">
    <h1>Colored Text</h1>
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Push Me====="
    };
  }
};
</script>

<style>
.hello {
  text-align: center;
  color: #900;
}
</style>
```
