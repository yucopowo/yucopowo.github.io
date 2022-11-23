
var element = document.getElementById('console');

var repl = new Console(element);

repl.wrapLog(console);

console.log(new Date().toString());


console.log(new Date().toString());


console.log(new Date().toString());

const cursor = document.querySelector('.jsconsole-input .CodeMirror-cursors .CodeMirror-cursor')

setInterval(() => {

    console.log(new Date().toString());

    // if(cursor) {
    //     cursor.scrollIntoViewIfNeeded();
    // }
}, 3000);

// for(let i =0;i<100;i++) {
//     console.log(new Date().toString());
//
//     if(cursor) {
//         cursor.scrollIntoViewIfNeeded();
//     }
// }
