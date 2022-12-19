# autojs_api模拟_全局变量与函数

## 全局变量与函数



```javascript {demo=autojs console}

console.time('sleep');

sleep(5000);

console.timeEnd('sleep');

```


```javascript {demo=autojs console}

function test() {
    console.time('sleep');
    
    sleep(5000);
    
    console.timeEnd('sleep');
}

test();

```


### toast
```javascript {demo=autojs}


sleep(5000);

toast('以气泡显示信息message几秒');

```


### click
```javascript {demo=autojs}
const screen = document.getElementById('screen');

const container = document.createElement('div');
container.addEventListener('click',()=>{
    console.log('container click');
});
container.innerHTML = '<button>button</button>';
screen.appendChild(container);
//click(50, 50);

```
