
const markdownDescription = require('markdown-description')
const { deepListDir } = require('deep-list-dir')
const fs = require('fs');
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const dayjs = require("dayjs");
const watch = require("node-watch");
const path = require("path"); // dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

const root = path.resolve(__dirname, '../');

const postsPath = path.resolve(root, 'posts');

function update() {
    //     const filepath
//     console.log('%s changed.', name);
    const l = postsPath.length + 1;
    deepListDir(postsPath,
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
            const id = hashCode(path);
            return {
                id,
                title:path.replace('.md', ''),
                path,
                mtime: dayjs(stat.mtime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
                ctime: dayjs(stat.ctime).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss'),
                summary
            };
        }).sort((a, b) => {
            return dayjs(b.mtime).diff(dayjs(a.mtime), 'seconds');
        });
        console.log(posts);
        fs.writeFile(path.resolve(root, 'posts.json'), JSON.stringify(posts,null, 2), () => {});
    });
}
watch(postsPath, { recursive: true }, function(evt, name) {
    update();
});

update();

function hashCode(keyString){
    // return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    let hash = 0;
    for (let charIndex = 0; charIndex < keyString.length; ++charIndex)
    {
        hash += keyString.charCodeAt(charIndex);
        hash += hash << 10;
        hash ^= hash >> 6;
    }
    hash += hash << 3;
    hash ^= hash >> 11;
    //4,294,967,295 is FFFFFFFF, the maximum 32 bit unsigned integer value, used here as a mask.
    return (((hash + (hash << 15)) & 4294967295) >>> 0).toString(16)
}
