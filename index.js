


function main() {
    const s = document.createElement('script');
    s.type = 'module';
    s.src = '/src/main.js';
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


        const registration = await navigator.serviceWorker.register('/sw.js', {scope: "/"});
        console.log('ServiceWorker register success: ', registration.waiting, registration);

        // if(!window.IS_GITHUB_ENV) {
        //     document.getElementById('update').style.display = 'inline-block';
        //     document.getElementById('update').addEventListener('click', () => {
        //         // console.log('ServiceWorker register unregister', registration);
        //         registration.unregister();
        //         unregisterAllServiceWorker();
        //     }, false);
        // }



    } catch (err) {
        console.log('ServiceWorker register failed: ', err);
    }
}

// await unregisterAllServiceWorker();
// await unregisterAllServiceWorker();
await registerServiceWorker();

main();

