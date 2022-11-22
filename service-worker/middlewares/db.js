import loki from 'https://esm.sh/lokijs@1.5.12?dev';

function getJson() {
    return fetch('/public/db/blog.json', {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    }).then((res)=>res.json());
    // .then((r) => {
    //
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(r);
    //         }, 0);
    //     });
    //
    // });
}

const adapter = new LokiLocalStorageAdapter();
const db = new loki('blog.json', {
    adapter : adapter,
    autoload: false,
    autoloadCallback : databaseInitialize,
    // autosave: true,
    // autosaveInterval: 4000
});

function databaseInitialize() {
    // const posts = db.getCollection("posts");
    //
    console.log('databaseInitialize============================');
    // console.log(posts);
    // if (posts === null) {
    //     db.addCollection("posts");
    // }

    // log some random event data as part of our example
    // log.insert({ event: 'dbinit', dt: (new Date()).getTime() });
}

const cache = {};

const localStorage = {
    getItem(key) {
        return cache[key];
    },
    setItem(key, value) {
        cache[key] = value;
    },
    removeItem() {
        delete cache[key];
    }
};

function localStorageAvailable() {
    return true;
}

/**
 * A loki persistence adapter which persists to web browser's local storage object
 * @constructor LokiLocalStorageAdapter
 */
function LokiLocalStorageAdapter() { }

/**
 * loadDatabase() - Load data from localstorage
 * @param {string} dbname - the name of the database to load
 * @param {function} callback - the callback to handle the result
 * @memberof LokiLocalStorageAdapter
 */
LokiLocalStorageAdapter.prototype.loadDatabase = function loadDatabase(dbname, callback) {
    if (localStorageAvailable()) {
        getJson().then((res)=>{
            Object.assign(cache, res);
            callback(localStorage.getItem(dbname));
        }).catch((e) => {
            callback(new Error(e || 'localStorage is not available'));
        });
    } else {
        callback(new Error('localStorage is not available'));
    }
};

/**
 * saveDatabase() - save data to localstorage, will throw an error if the file can't be saved
 * might want to expand this to avoid dataloss on partial save
 * @param {string} dbname - the filename of the database to load
 * @param {function} callback - the callback to handle the result
 * @memberof LokiLocalStorageAdapter
 */
LokiLocalStorageAdapter.prototype.saveDatabase = function saveDatabase(dbname, dbstring, callback) {
    if (localStorageAvailable()) {
        localStorage.setItem(dbname, dbstring);
        callback(null);
    } else {
        callback(new Error('localStorage is not available'));
    }
};

/**
 * deleteDatabase() - delete the database from localstorage, will throw an error if it
 * can't be deleted
 * @param {string} dbname - the filename of the database to delete
 * @param {function} callback - the callback to handle the result
 * @memberof LokiLocalStorageAdapter
 */
LokiLocalStorageAdapter.prototype.deleteDatabase = function deleteDatabase(dbname, callback) {
    if (localStorageAvailable()) {
        localStorage.removeItem(dbname);
        callback(null);
    } else {
        callback(new Error('localStorage is not available'));
    }
};

function loadDatabase() {
    if(cache['blog.json']) return;
    return new Promise((resolve) => {
        db.loadDatabase({}, () => {
            resolve();
        });
    });
}

export default () => {
    return async (ctx, next) => {
        await loadDatabase();
        ctx.db = db;
        await next();
    }
}

