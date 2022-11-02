// importScripts('/service-worker/modules.js');

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

    self.modules.utils = { hashCode };

})();

