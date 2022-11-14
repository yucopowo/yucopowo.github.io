# markdown演示模板

## react 演示
### react 18
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

### react 17.0.2
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


