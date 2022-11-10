

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
