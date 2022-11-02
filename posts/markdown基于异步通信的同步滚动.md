# markdown基于异步通信的同步滚动
markdown同步滚动

<blog-example-previewer src="/examples/markdown-sync-scroll/index.html"></blog-example-previewer>

## 主页面
```html | title=index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html, body {
            height: 100%;
            padding: 0;
            margin: 0;
        }
        body {
            display: flex;
        }
        .panel {
            width: 50%;
        }

        .editor-panel {

        }
        .previewer-panel {

        }
    </style>

    <script src="//cdn.bootcdn.net/ajax/libs/EventEmitter/5.2.8/EventEmitter.js"></script>
    <script src="//cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js"></script>
    <script src="//cdn.bootcdn.net/ajax/libs/jquery-scrollTo/2.1.3/jquery.scrollTo.js"></script>
    <script src="//cdn.bootcdn.net/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
    <script src="//cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.js"></script>
    <script src="common.js"></script>

    <script>
        const colors = new Array(1000).fill(0).map(x=>`rgb(${random(1, 255)},${random(1, 255)},${random(1, 255)})`);

        window.colors = colors;
    </script>

</head>
<body>



<iframe id="editor" class="panel editor-panel" src="editor.html" frameborder="0"></iframe>
<iframe id="previewer" class="panel previewer-panel" src="previewer.html" frameborder="0"></iframe>

<script src="index.js"></script>

</body>
</html>


```


```javascript | title=index.js

const editor = document.getElementById('editor');
const editorContentWindow = editor.contentWindow;

const previewer = document.getElementById('previewer');
const previewerContentWindow = previewer.contentWindow;
window.addEventListener('message', (e) => {
    try {
        const data = JSON.parse(e.data);
        if(data.type === 'scrollTo') {
            if(data.to === 'previewer') {
                previewerContentWindow.postMessage(e.data);
            } else if(data.to === 'editor') {
                editorContentWindow.postMessage(e.data);
            }
        }
    } catch (e) {

    }
});

document.addEventListener('DOMContentLoaded', () => {
    editor.onload = () => {
        editorContentWindow.postMessage(JSON.stringify({
            type: 'DOMContentLoaded'
        }));
    };
    previewer.onload = () => {
        previewerContentWindow.postMessage(JSON.stringify({
            type: 'DOMContentLoaded'
        }));
    };
});



```


## 编辑器页面

```html | title=editor.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        body {
            background: aliceblue;
        }
        .scroll-container {
            height: 100vh;
            overflow: auto;
        }
        .scroll-container p:first-child{
            margin-top: 0;
        }
        .scroll-container:after {
            content: '';
            display: block;
            height: 100vh;
        }
        .p-line span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            height: 100%;
        }
    </style>
    <script>
        window.__env__ = 'editor';
    </script>
</head>
<body>

<div id="scroll-container" class="scroll-container"></div>
<script src="common.js"></script>

<script>
    (() => {

        const colors = window.top.colors;
        const container = document.getElementById('scroll-container');
        for (let i=0;i<200;i++) {
            const p = document.createElement('p');
            p.id = 'id_'+i;
            p.classList.add('p-line');
            p.style.height = `${random(16, 500)}px`;
            p.style.backgroundColor = colors[i];
            p.innerHTML = '<span>'+i+'</span>';
            container.appendChild(p);
        }

    })();
</script>
<script src="editor.js"></script>

</body>
</html>



```

```javascript | title=editor.js

define(function (emitter, _, $) {
   const container = document.getElementById('scroll-container');

   const scrollingFromMessage = new Map();

   function isScrollingFromMessage() {
      return !(scrollingFromMessage.size === 0);
   }
   function onScrollFromUser() {
      if(isScrollingFromMessage()) return;

      const { id, offset } = getFirstNodePositionInView(container);

      window.top.postMessage(JSON.stringify({
         to: 'previewer',
         type: 'scrollTo',
         data: {
            id,
            offset
         }
      }));
   }

   function onScrollFromMessage(data) {
      const uuid = UUID();
      scrollingFromMessage.set(uuid, true);

      const { id, offset } = data;
      const target = document.getElementById(id);

      // console.log(target);
      $(container).stop(true, false).scrollTo(target, {
         axis: 'y',
         easing: 'easeOutQuart',
         interrupt: true,
         duration: 50,
         over: {
            top: offset
         },
         onAfter() {
            scrollingFromMessage.delete(uuid);
         },
         fail() {
            scrollingFromMessage.delete(uuid);
         }
      });

   }

   // const throttledScrollFromMessage = _.debounce(onScrollFromMessage, 50, {
   //    maxWait: 500
   // });
   emitter.on('scrollTo', (data) => {
      // throttledScrollFromMessage(data.data);
      onScrollFromMessage(data.data);
   });


   // const throttledScrollFromUser = _.debounce(onScrollFromUser, 50, {
   //    maxWait: 500
   // });
   // container.addEventListener('scroll', throttledScrollFromUser, false);
   container.addEventListener('scroll', () => {
      onScrollFromUser();
   }, false);
});


```


## 预览页面

```html | title=previewer.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        body {
            background: lightgrey;
        }
        .scroll-container {
            height: 100vh;
            overflow: auto;
        }
        .scroll-container p:first-child{
            margin-top: 0;
        }
        .scroll-container:after {
            content: '';
            display: block;
            height: 100vh;
        }
        .p-line span {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            height: 100%;
        }

        #scrollingFromMessage{
            position: absolute;
            top: 0;
            left: 10px;
        }
    </style>
    <script>
        window.__env__ = 'previewer';
    </script>

</head>
<body>
<div id="scroll-container" class="scroll-container"></div>

<script src="common.js"></script>

<script>
    (() => {
        const colors = window.top.colors;
        const container = document.getElementById('scroll-container');
        for (let i=0;i<200;i++) {
            const p = document.createElement('p');
            p.id = 'id_'+i;
            p.classList.add('p-line');
            p.style.height = `${random(16, 800)}px`;
            p.style.backgroundColor = colors[i];
            p.innerHTML = '<span>'+i+'</span>';
            container.appendChild(p);
        }

    })();
</script>

<script src="previewer.js"></script>

</body>
</html>




```

```javascript | title=previewer.js

define(function (emitter, _, $) {
    const container = document.getElementById('scroll-container');



    // let scrollingFromMessage = false;
    // let scrollFrom = 'user';
    const scrollingFromMessage = new Map();

    function isScrollingFromMessage() {
        return !(scrollingFromMessage.size === 0);
    }
    // const scrollingFromMessageContainer = document.getElementById('scrollingFromMessage');
    // setInterval(() => {
    //     // console.log('scrollingFromMessage', scrollingFromMessage);
    //     scrollingFromMessageContainer.innerHTML = isScrollingFromMessage();
    // }, 100);
    function onScrollFromUser() {
        // console.log('onScrollFromUser');
        // console.log('scrollingFromMessage', scrollingFromMessage);
        if(isScrollingFromMessage()) return;

        const { id, offset } = getFirstNodePositionInView(container);

        window.top.postMessage(JSON.stringify({
            to: 'editor',
            type: 'scrollTo',
            data: {
                id,
                offset
            }
        }));
    }

    function onScrollFromMessage(data) {
        // console.log('onScrollFromMessage', data);

        // scrollingFromMessage = true;

        const uuid = UUID();
        scrollingFromMessage.set(uuid, true);

        const { id, offset } = data;
        const target = document.getElementById(id);

        // console.log(target);
        $(container).stop(true, false).scrollTo(target, {
            axis: 'y',
            easing: 'easeOutExpo',
            interrupt: true,
            duration: 50,
            over: {
                top: offset
            },
            onAfter() {
                // console.log(scrollingFromMessage);
                // scrollingFromMessage = false;
                // console.log('scrollingFromMessage', scrollingFromMessage);
                scrollingFromMessage.delete(uuid);
            },
            fail() {
                // scrollingFromMessage = false;
                scrollingFromMessage.delete(uuid);
            }
        });

    }

    // const throttledScrollFromMessage = _.debounce(onScrollFromMessage, 50, {
    //     maxWait: 500
    // });
    emitter.on('scrollTo', (data) => {
        // throttledScrollFromMessage(data.data);
        onScrollFromMessage(data.data);
    });


    // const throttledScrollFromUser = _.debounce(onScrollFromUser, 50, {
    //     maxWait: 500
    // });
    // container.addEventListener('scroll', throttledScrollFromUser, false);
    container.addEventListener('scroll', () => {
        onScrollFromUser();
    }, false);
});



```

## 公共代码
```javascript | title=common.js

const define = (() => {
    const topWindow = window.top || window;
    const modules = [];

    let emitter = null;
    function getArgs(func) {
        const args = func.toString().match(/\s.*?\(([^)]*)\)/)[1];
        return args.split(",").map(function (arg){
            return arg.replace(/\/\*.*\*\//,"").trim();
        }).filter(function(args) {
            return args;
        });
    }

    function define(m) {
        modules.push([m, getArgs(m)]);
    }

    function ready() {
        if(topWindow.EventEmitter && !emitter){
            emitter = new topWindow.EventEmitter();
            // emitter.addListener('scrollTo', (data) => {
            //     console.log('scrollTo==',data);
            // });
        }

        modules.forEach((m) => {
            const module = m[0];
            const args = m[1].map((a) => a==='emitter'?emitter:topWindow[a]);
            module.apply(null, args);
        });
    }

    window.addEventListener('message', (e) => {
        try {
            const data = JSON.parse(e.data);
            if(data.type === 'DOMContentLoaded') {
                ready();
            } else {
                if(emitter) {
                    emitter.emit(data.type, data);
                }
            }
        } catch (e) {
            console.error(e);
        }
    });

    return define;
})();

function random(min=1, max=99999){
    return Math.floor(Math.random() * (max - min)) + min;
}

function getFirstNodePositionInView(container) {
    const children = container.children;
    for (let i = 0;i<children.length;i++) {
        const node = children[i];
        const clientRect = node.getBoundingClientRect();
        if(((clientRect.top + clientRect.height) > 0) || (i===children.length-1)) {
            const p = Math.abs(clientRect.top / clientRect.height);
            return {
                id: node.getAttribute('id'),
                offset: p
            };
        }
    }
}

const UUID = (() => {
    let index = 1;
    return () => index++;
})();



```

