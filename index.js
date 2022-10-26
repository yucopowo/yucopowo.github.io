(() =>{

    function main() {
        const s = document.createElement('script');
        s.type = 'module';
        s.src = '/src/main.jsx';
        document.body.appendChild(s);
    }

    async function unregisterAllServiceWorker() {
        const registrations = await navigator.serviceWorker.getRegistrations();
        console.log('registrations', registrations);
        for(let registration of registrations) {
            const r = await registration.unregister();
            console.log(r);
        }
    }

    async function registerServiceWorker() {
        if (!navigator.serviceWorker) {
            return;
        }
        await unregisterAllServiceWorker();
        console.log('开始注册ServiceWorker');

        try {
            const registration = await navigator.serviceWorker
                .register('/sw.js', {scope: "/"});
            // console.log('ServiceWorker register success: ', registration);
            // setInterval(() => {
            //     registration.update();
            // }, 5000);
            document.getElementById('update').addEventListener('click', () => {
                console.log('ServiceWorker register unregister', registration);
                registration.unregister();
                unregisterAllServiceWorker();
            }, false);
        } catch (err) {
            console.log('ServiceWorker register failed: ', err);
        }
    }

    registerServiceWorker().then(() => {
        main();
        // Promise.all([
        //     require('/src/App.jsx')
        // ]).then(() => {
        //     main();
        // }).catch((e) => {
        //     console.error(e);
        // });
    });

})();
