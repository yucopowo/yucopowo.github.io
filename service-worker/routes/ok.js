import { ServiceWorkerRouter } from '../index.js';

const router = new ServiceWorkerRouter();

router.get('/api/ok', async (ctx) => {
    const { response, db } = ctx;
    const count = db.collections.length;
    response.body = {code: 0, message: 'ok', data: count};
});

export default router;
