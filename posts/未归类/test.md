# 博客markdown扩展语法

## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块

## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块



## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块


## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
## 代码块
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
