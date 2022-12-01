const express = require('express');
const path = require('path');

const app = express();

const root = path.resolve(__dirname, '../');

const port = 80;

app.use(express.static(root));

// app.use('/', (req, res) => {
//     res.sendFile(path.resolve(root, 'index.html'));
// });

app.use((req, res) => {
    if(req.url.startsWith('/page')) {
        res.sendFile(path.resolve(root, 'index.html'));
        return;
    }
    if(req.url.startsWith('/api')){
        res.status(404);
        res.send('Not Found');
        return;
    }

    if(/.(jsx?|css|less|hbs|html|mdx?)$/.test(req.url)){
        res.status(404);
        res.send(null);
        return;
    }

    if(req.accepts('text/html')){
        // console.log("accepts('text/html')");
        res.sendFile(path.resolve(root, '404.html'));
        return;
    }

    res.status(404);
    res.send('Not Found');
    // res.sendFile(path.resolve(root, '404.html'));
    // if(req.url.includes('/page')) {
    //     console.log('req=========');
    //     console.log(req);
    // }
    // res.redirect('/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

