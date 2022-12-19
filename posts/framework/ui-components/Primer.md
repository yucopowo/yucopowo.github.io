# Primer

## Button
```jsx {demo type=module height=600 container=root}
import React, { useState, useEffect } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';
import { ThemeProvider, Button } from 'https://esm.sh/@primer/react';

const App = () => {
    const style = {
        padding: 20
    };
    return (
        <ThemeProvider>
            <div style={style}>
                <Button>Default</Button>
            </div>
        </ThemeProvider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

```

## ProgressBar
```jsx {demo type=module height=600 container=root}
import React, { useState, useEffect } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';
import { ThemeProvider, ProgressBar } from 'https://esm.sh/@primer/react';

const App = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(progress>100?0:progress+1);
        }, 20);
    }, [progress]);
    
    const style = {
        padding: 20
    };
    return (
        <ThemeProvider>
            <div style={style}>
                <ProgressBar progress={progress} />
            </div>
        </ThemeProvider>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

```
