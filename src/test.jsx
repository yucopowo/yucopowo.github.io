import React from 'react';
import { createRoot } from 'react-dom/client';
import handleLazyViewport from "./components/react-in-lazy-viewport/index.jsx";
// import A from './a.jsx';

const LazyLoading = handleLazyViewport(
    React.lazy(() => import('/src/components/loading/index.jsx'))
);

const App = () => {
    const style1 = {
        height: 1500,
        backgroundColor: 'blue',
    };
    const style2 = {
        height: 1500,
        backgroundColor: '#575736',
    };
    return (
        <div>
            <div style={style1}>{'-'.repeat(10000)}</div>
            <div style={style2}>
                {/*<ReactInViewportComponent*/}
                {/*    fallback={<div>fallback</div>}*/}
                {/*    loader={() => import('/src/components/loading/index.jsx')}*/}
                {/*/>*/}
                <LazyLoading />
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));






// console.log('test');
//
// const res = await (await (fetch(`/api/ok`))).json();
//
// console.log(res);
// fetch(`/api/ok`, {
//     headers: {
//         // 'Accept': 'application/json',
//         // 'content-type': 'application/json'
//     }
// }).then((res) => {
//     return res.json();
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//     console.error(e);
// });



// const path = require("path");
//
// console.log(path.parse('autojs/api/dsd.md'))
// fetch(`/api/post/html?path=test.md`, {
//     headers: {
//         'Accept': 'application/json'
//     }
// }).then((res) => {
//     return res.text();
// }).then((res) => {
//     console.log(res);
// }).catch((e) => {
//
//     console.error(e);
//
// });


// let running = false;
// const clocks = [
//     {
//         hour: 11,
//         minute: 15,
//         clocked: false,
//     },
//     {
//         hour: 11,
//         minute: 16,
//         clocked: false,
//     },
//     {
//         hour: 11,
//         minute: 17,
//         clocked: false,
//     }
// ];
//
// function checkClock() {
//
//     if(running) return;
//     let c = null;
//     for(let i=0;i<clocks.length;i++) {
//         const clock = clocks[i];
//         if(clock.clocked) {
//             continue;
//         }
//
//         const d = new Date();
//
//         if(d.getHours()>=clock.hour && d.getMinutes()>=clock.minute) {
//             clock.clocked = true;
//             c = clock;
//             break;
//         }
//     }
//
//
//     // const clock = clocks.l((c) => c.clocked);
//
//     if(c) {
//         running = true;
//         console.log('开始任务', c);
//         setTimeout(() => {
//             running = false;
//             console.log('任务结束', c);
//         }, 10*1000);
//     }
//
//
// }
//
// // checkClock();
// setInterval(() => {
//     console.log('检查任务');
//     // 继续
//     checkClock();
// }, 60 * 1000);
