# markdown内置code模板

## javascript代码

**markdown语法**
```markdown
    普通JavaScript
    ```javascript | demo
    const root = document.createElement('root');
    document.body.appendChild(root);
    document.body.style.backgroundColor = 'yellow';
    root.innerHTML = _.camelCase('hello javascript模板');
    ```

    esm
    ```javascript | demo | type=module
    ```
```


```javascript | demo | type=module
import _ from 'https://esm.sh/lodash';
const root = document.createElement('root');
document.body.appendChild(root);
document.body.style.backgroundColor = 'yellow';
root.innerHTML = _.camelCase('hello javascript模板');
```


```typescript | demo
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
    ```html | demo
    ```
```

```html | demo
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


**markdown语法**
```markdown
    ```jsx | demo
    ```
```

```jsx | demo
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

