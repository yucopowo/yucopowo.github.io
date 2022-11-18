const loki = require('lokijs');
const fs = require('fs');
const path = require("path");

let cache = {
}
;
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
        callback(localStorage.getItem(dbname));
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


var adapter = new LokiLocalStorageAdapter();
var db = new loki('blog.json', {
    adapter : adapter,
    autoload: true,
    autoloadCallback : databaseInitialize,
    // autosave: true,
    // autosaveInterval: 4000
});

// console.log(loki.prototype);
function databaseInitialize() {
    var posts = db.getCollection("posts");

    if (posts === null) {
        db.addCollection("posts");
    }

    const folders = db.getCollection("folders");
    if (folders === null) {
        db.addCollection("folders");
    }
    // log some random event data as part of our example
    // log.insert({ event: 'dbinit', dt: (new Date()).getTime() });
}

const root = path.resolve(__dirname, '../public/db');

db.clear = () => {
    cache = {};
};

db.save = () => {
        fs.writeFile(path.resolve(root, 'blog.json'), JSON.stringify(cache,null, 2), () => {});
};

module.exports = db;
// setInterval(() => {
//     const posts = db.getCollection("posts");
//     // posts.insert({name: '11'+new Date()});
//     // console.log(cache);
//
//     console.log(posts.chain().data());
//
// }, 5000);
