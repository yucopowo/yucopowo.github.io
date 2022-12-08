import { ServiceWorkerRouter } from '../index.js';

const router = new ServiceWorkerRouter();

router.get('/api/ok', async (ctx) => {
    const { response, db } = ctx;
    const count = db.collections.length;
    response.body = {code: 0, message: 'ok', data: count};
});

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time || 7000);
    });
}
router.get('/api/sleep', async (ctx) => {
    const { response, request } = ctx;
    const url = new URL(request.url);
    const i = url.searchParams.get('i');

    await sleep((Math.random() * 10 + 3) * 1000 );
    response.body = {code: 0, message: 'ok', data: i};
});


export default router;
