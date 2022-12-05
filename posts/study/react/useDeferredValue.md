# useDeferredValue.md

简单解释一下，就是 useDeferredValue 可以让我们延迟渲染不紧急的部分，类似于防抖但没有固定的延迟时间，延迟的渲染会在紧急的部分先出现在浏览器屏幕以后才开始，并且可中断不会阻塞用户输入。

```jsx {demo=react}
import React, { useState, useEffect, useDeferredValue } from 'react';

const List = (props) => {
    const { keyword } = props;
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(count+1);
        setTimeout(() => {
            setList(keyword.repeat(50).split(''));
        }, 500);
    }, [keyword]);
    return (
        <div>
            <div>render count={count}</div>

            <ul style={{maxHeight:30, overflow: 'hidden'}}>
                {
                    list.map((m, i) => {
                        return <li key={String(i)}>{m}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default () => {
    const [start, setStart] = useState(false);

    const [keyword, setKeyword] = useState('');
    const deferredKeyword = useDeferredValue(keyword);

    useEffect(() => {
        if(start) {
            if(keyword.length < 300) {
                
                setTimeout(() => {
                    setKeyword(keyword + Math.floor(Math.random()*1000));
                }, 50);
                
            }
        }
        
    }, [start, keyword]);
    
    return (
        <div style={{padding:20}}>
            <div>keyword={keyword}</div>
            <div>length={keyword.length}</div>

            <div>
                <input type="text" onChange={(e) => {
                    setKeyword(e.target.value);
                    // 
                }} value={keyword} />
                <button onClick={() => {
                    setKeyword('');
                    setStart(true);
                }}> 开始模拟输入 </button>
            </div>

            <List keyword={keyword} />

            <List keyword={deferredKeyword} />
        </div>
    )
}



```
