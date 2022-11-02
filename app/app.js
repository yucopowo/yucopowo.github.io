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
    res.sendFile(path.resolve(root, '404.html'));
    // if(req.url.includes('/page')) {
    //     console.log('req=========');
    //     console.log(req);
    // }
    // res.redirect('/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

