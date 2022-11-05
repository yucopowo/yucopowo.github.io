# 博客markdown扩展语法

## 代码块

### 高亮代码块
```javascript
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);
```

### 演示模式
- demo 包含演示和代码
- preview 只有演示


#### demo演示模式
```markdown
    ```javascript | demo
    代码  
    ```
```

```javascript | demo

const container = document.createElement('div');
container.style.color = 'red';
container.innerHTML = 'hello demo';
document.body.appendChild(container);
     
```

#### preview演示模式
```markdown
    ```javascript | preview
    代码  
    ```
```

```javascript | preview

const container = document.createElement('div');
container.innerHTML = 'hello demo';
document.body.appendChild(container);
     
```



### 内置模板
#### react模板
template
- html(默认)
- react
- vue
```markdown
    ```javascript | template=react
    代码  
    ```
```


```javascript | demo | template=react
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



```html
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
      msg: "Push Me"
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
