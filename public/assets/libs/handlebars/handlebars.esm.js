import Handlebars from 'https://esm.sh/handlebars@4.7.7?dev';

import helpers from "./comparison.js";

for (let key in helpers) {
    Handlebars.registerHelper(key, helpers[key]);
}

export default Handlebars;
