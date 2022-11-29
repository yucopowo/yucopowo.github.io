```jsx {demo}

import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '@rebass/preset';
import {Button} from 'rebass';

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <div>hello react component count = {count}</div>
            <Button variant='primary' mr={2}>Primary</Button>
            <button onClick={()=>{
                setCount(count+1);
            }}>add</button>
        </ThemeProvider>

    );
};

export default App;

```
