
export function sleep(n = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n);
    });
}

export function toastLog(...args) {
    console.log.apply(null, args);
}

export function toast(message) {
    Toastify({
        selector: document.querySelector('#screen'),
        text: message,
        duration: 3000,
        newWindow: true,
        // close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#232323",
        },
        // onClick: function(){} // Callback after click
    }).showToast();
}

// min {number} 随机数产生的区间下界
// max {number} 随机数产生的区间上界
// 返回 {number}
// 返回一个在[min...max]之间的随机数。例如random(0, 2)可能产生0, 1, 2。
export function random(min, max) {
    if (arguments.length === 2) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return Math.random();
}

export function exit() {
    throw new Error('ScriptInterruptedException');
}

