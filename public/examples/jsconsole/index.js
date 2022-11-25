
var element = document.getElementById('console');

var repl = new Console(element);

repl.wrapLog(console);

// console.log(new Date().toString());

// console.log(new Date().toString());

console.log(new Date().toString());

const cursor = document.querySelector('.jsconsole-input .CodeMirror-cursors .CodeMirror-cursor')

// setInterval(() => {
//
//     console.log(new Date().toString());
//
//     // if(cursor) {
//     //     cursor.scrollIntoViewIfNeeded();
//     // }
// }, 3000);

// for(let i =0;i<100;i++) {
//     console.log(new Date().toString());
//
//     if(cursor) {
//         cursor.scrollIntoViewIfNeeded();
//     }
// }


document.getElementById('print_string').addEventListener('click', () => {
    console.log('字符串日志文本');
});
document.getElementById('print_number').addEventListener('click', () => {
    console.log(18235);
});
document.getElementById('print_boolean').addEventListener('click', () => {
    console.log(true);
    console.log(false);
});


document.getElementById('print_array').addEventListener('click', () => {
    console.log([1,2,3,4,5,6]);
});
document.getElementById('print_object').addEventListener('click', () => {
    console.log({
        a: 1,
        b: {
            c:3
        }
    });
});
document.getElementById('print_date').addEventListener('click', () => {
    console.log(new Date());
});

