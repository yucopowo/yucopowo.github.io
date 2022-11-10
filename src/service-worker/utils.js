(()=> {

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


    function escapeRegExp (s) {
        return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    function removeDelimiter(str, options) {
        const start = escapeRegExp(options.leftDelimiter);
        const end = escapeRegExp(options.rightDelimiter);

        const curly = new RegExp(
            '[ \\n]?' + start + '[^' + start + end + ']+' + end + '$'
        );
        const pos = str.search(curly);

        return pos !== -1 ? str.slice(0, pos) : str;
    }
    function getAttrs (str, start, options) {
        // not tab, line feed, form feed, space, solidus, greater than sign, quotation mark, apostrophe and equals sign
        const allowedKeyChars = /[^\t\n\f />"'=]/;
        const pairSeparator = ' ';
        const keySeparator = '=';
        const classChar = '.';
        const idChar = '#';

        const attrs = [];
        let key = '';
        let value = '';
        let parsingKey = true;
        let valueInsideQuotes = false;

        // read inside {}
        // start + left delimiter length to avoid beginning {
        // breaks when } is found or end of string
        for (let i = start + options.leftDelimiter.length; i < str.length; i++) {
            if (str.slice(i, i + options.rightDelimiter.length) === options.rightDelimiter) {
                if (key !== '') { attrs.push([key, value]); }
                break;
            }
            const char_ = str.charAt(i);

            // switch to reading value if equal sign
            if (char_ === keySeparator && parsingKey) {
                parsingKey = false;
                continue;
            }

            // {.class} {..css-module}
            if (char_ === classChar && key === '') {
                if (str.charAt(i + 1) === classChar) {
                    key = 'css-module';
                    i += 1;
                } else {
                    key = 'class';
                }
                parsingKey = false;
                continue;
            }

            // {#id}
            if (char_ === idChar && key === '') {
                key = 'id';
                parsingKey = false;
                continue;
            }

            // {value="inside quotes"}
            if (char_ === '"' && value === '') {
                valueInsideQuotes = true;
                continue;
            }
            if (char_ === '"' && valueInsideQuotes) {
                valueInsideQuotes = false;
                continue;
            }

            // read next key/value pair
            if ((char_ === pairSeparator && !valueInsideQuotes)) {
                if (key === '') {
                    // beginning or ending space: { .red } vs {.red}
                    continue;
                }
                attrs.push([key, value]);
                key = '';
                value = '';
                parsingKey = true;
                continue;
            }

            // continue if character not allowed
            if (parsingKey && char_.search(allowedKeyChars) === -1) {
                continue;
            }

            // no other conditions met; append to key/value
            if (parsingKey) {
                key += char_;
                continue;
            }
            value += char_;
        }

        if (options.allowedAttributes && options.allowedAttributes.length) {
            const allowedAttributes = options.allowedAttributes;

            return attrs.filter(function (attrPair) {
                const attr = attrPair[0];

                function isAllowedAttribute (allowedAttribute) {
                    return (attr === allowedAttribute
                        || (allowedAttribute instanceof RegExp && allowedAttribute.test(attr))
                    );
                }

                return allowedAttributes.some(isAllowedAttribute);
            });

        }
        return attrs;

    }


    function parseAttrs(infoString) {
        const config = {
            lang: 'plaintext'
        };
        if(!infoString) return config;
        const defaultOptions = {
            leftDelimiter: '{',
            rightDelimiter: '}',
            allowedAttributes: []
        };
        const start = infoString.lastIndexOf(defaultOptions.leftDelimiter);
        const attrs = getAttrs(infoString, start, defaultOptions );
        attrs.forEach((attr) =>{
            config[attr[0]] = attr[1];
        });
        config['lang'] = removeDelimiter(infoString, defaultOptions);
        return config;
    }

    self.modules.utils = { hashCode, parseAttrs };

    // console.log( parseAttrs('{filename=/common.js, .cl1}') );


})();

