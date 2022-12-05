# emotion
Emotion是一个为使用JavaScript编写css样式而设计的库

## Vanilla
```js {demo type=module container=root}
import { css } from '@emotion/css'

const app = document.getElementById('root');
app.innerHTML = 'change color';
const myClassName = css`
  color: hotpink;
`
app.classList.add(myClassName)

```



##  @emotion/react
```jsx {demo=react}
import { jsx } from '@emotion/react';
import { css } from '@emotion/css';

const color = 'white'

export default () => {
    return jsx('div', {
            css: {
                backgroundColor: 'hotpink',
                '&:hover': {
                    color: 'lightgreen'
                }
            }
        }, 'This has a hotpink background.'
    );
}

```

```jsx {demo=react}
import { jsx } from '@emotion/react';
import { css } from '@emotion/css';

const color = 'white';
const style = css`
    background-color: hotpink;
    &:hover {
        color: ${color};
    }
`;

export default () => {
    return jsx('div', {
            css: style,
            className: style,
        }, 'This has a hotpink background.'
    );
}

```

## react
```jsx {demo=react}
import React, { useState, useEffect, useDeferredValue } from 'react';
import { css } from '@emotion/css';

const color = 'white'

export default () => {
    return (
        <div
            className={css`
                margin: 20px;
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                color: ${color};
                }
            `}
        >
            Hover to change color.
        </div>
    );
}

```



```jsx {demo=react}
import React, { useState, useEffect, useDeferredValue } from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

export default () => {
    return (
        <Button>
            This my button component.
        </Button>
    );
}

```



https://emotion.sh/docs/introduction
