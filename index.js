function main() {
    const s = document.createElement('script');
    s.type = 'module';
    s.src = '/src/main.js';
    // s.src = '/src/test.jsx';
    document.body.appendChild(s);
}

async function unregisterAllServiceWorker() {
    if (!navigator.serviceWorker) {
        return;
    }
    const registrations = await navigator.serviceWorker.getRegistrations();
    // console.log('registrations', registrations);
    for(let registration of registrations) {
        const r = await registration.unregister();
        console.log(r);
    }
}

async function registerServiceWorker() {
    if (!navigator.serviceWorker) {
        return;
    }
    // await unregisterAllServiceWorker();
    // console.log('开始注册ServiceWorker');

    try {


        //scope: "/"
        const registration = await navigator.serviceWorker.register('/sw.js', {
            type: 'module',
            scope: "/"
        });

        if(!window.IS_GITHUB_ENV) {
            document.getElementById('update').style.display = 'inline-block';
            document.getElementById('update').addEventListener('click', () => {
                // console.log('ServiceWorker register unregister', registration);
                registration.unregister();
                unregisterAllServiceWorker();
            }, false);
        }

        if (navigator.serviceWorker.controller) {
            // already active and controlling this page
            return navigator.serviceWorker;
        }

        return new Promise(function (resolve) {
            function onControllerChange() {
                navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
                resolve(navigator.serviceWorker);
            }
            navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);
        });

        // console.log('ServiceWorker register success: ', navigator.serviceWorker.controller);


        // console.log('ServiceWorker register success: ', registration.waiting, registration);




        // function sendMessage(id, type, data) {
        //     navigator.serviceWorker.controller.postMessage((JSON.stringify({
        //         id,
        //         type,
        //         data
        //     })));
        // }
        //
        //
        // navigator.serviceWorker.addEventListener("message", function(event) {
        //     console.log('event.data======');
        //     // console.log(event.data);
        //     const message = JSON.parse(event.data);
        //
        //
        //     if(message.type === 'code') {
        //         console.log(message);
        //         const codeKey = message.data.code;
        //         const code = localStorage.getItem(codeKey);
        //         localStorage.removeItem(codeKey);
        //         console.log(code);
        //         sendMessage(message.id, message.type, {
        //             code
        //         });
        //     }
        // });


    } catch (err) {
        console.log('ServiceWorker register failed: ', err);
    }
}

// await unregisterAllServiceWorker();
// await unregisterAllServiceWorker();
const worker = await registerServiceWorker();


//
//
function sleep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 300);
    });
}
async function ready(tryCount = 0) {
    if(tryCount > 10) {
        throw new Error('max try count');
    }
    try {
        const res = await (await (fetch(`/api/ok`))).json();
        if(res.code < 0 ) {
            return await ready(tryCount + 1);
        }
        return res;
    } catch (e) {
        await sleep();
        return await ready(tryCount + 1);
    }
}

// setTimeout(() => {
//     ready().then((res) => {
//         // console.log('ok=====');
//         // console.log(res);
//         main();
//     }).catch((e) => {
//         console.log('error=====');
//         console.error(e);
//     });
// });

if(worker) {

    // import('promise-worker').then((m) => {
    //     console.log(m);
    // });

    main();
} else {
    // ready().then((res) => {
    //     console.log('ok=====');
    //     console.log(res);
    //     // main();
    //     // window.location.reload();
    // }).catch((e) => {
    //     console.log('error=====');
    //     console.error(e);
    // }).finally(() => {
    //     // window.location.reload();
    // });
}



// ready().then((res) => {
//     console.log('ok=====');
//     console.log(res);
//     // main();
//     // window.location.reload();
// }).catch((e) => {
//     console.log('error=====');
//     console.error(e);
// }).finally(() => {
//     // window.location.reload();
// });
