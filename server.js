const watch = require('node-watch');
const express = require('express');
const fallback = require('express-history-api-fallback');
const dayjs = require('dayjs');
const app = express()
const port = 8000;

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
const root = `${__dirname}`

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const msum = require('markdown-summary')
const markdownDescription = require('markdown-description')

const { deepListDir, deepListDirSync } = require('deep-list-dir')
const fs = require('fs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)


watch(`${__dirname}/posts`, { recursive: true }, function(evt, name) {
//     const filepath
//     console.log('%s changed.', name);
    const l = `${__dirname}/posts`.length + 1;
    deepListDir(`${__dirname}/posts`,
        {
            pattern: ['*.md'], // minimatch or RegExp
            // base: '', set parent base to something different than given directory
            // minimatchOptions: { matchBase: true } // minimatch options
        }
    ).then((p) => {
        const posts = p.map((x)=>{
            const path = x.substring(l);
            const stat = fs.statSync(x);
            console.log(stat);

            const content = fs.readFileSync(x, 'utf-8');
            // console.log(content);
            const summary = markdownDescription(content);
            return {
                title:path.replace('.md', ''),
                path,
                mtime: dayjs(stat.mtime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
                ctime: dayjs(stat.ctime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
                summary
            };
        });
        console.log(posts);
        fs.writeFile('posts.json', JSON.stringify(posts,null, 2), () => {});
    })
});
