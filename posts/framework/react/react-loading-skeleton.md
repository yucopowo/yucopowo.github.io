# react-loading-skeleton

Make beautiful, animated loading skeletons that automatically adapt to your app.


## Basic Usage
```jsx {demo type=module height=600 container=root}
import React, { useState, useEffect } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';
import Skeleton from 'https://esm.sh/react-loading-skeleton';
import 'https://esm.sh/react-loading-skeleton/dist/skeleton.css';


const App = () => {
    const style = {
        padding: 20
    };
    return (
        <div style={style}>
            <Skeleton count={5} />
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

```

## Theming


```jsx {demo type=module height=600 container=root}
import React, { useState, useEffect } from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom/client';
import Skeleton, { SkeletonTheme } from 'https://esm.sh/react-loading-skeleton';
import 'https://esm.sh/react-loading-skeleton/dist/skeleton.css';


const App = () => {
    const style = {
        padding: 20
    };
    return (
        <div style={style}>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);

```


[react-loading-skeleton]: https://github.com/dvtng/react-loading-skeleton
