const express = require('express');
const path = require('path');

const app = express();

const root = `${__dirname}`;

const port = 80;


app.use(express.static(root));

// app.use('/', (req, res) => {
//     res.sendFile(path.resolve(root, 'index.html'));
// });

app.use((req, res) => {
    // res.sendFile(path.resolve(root, '404.html'));
    res.redirect('/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

