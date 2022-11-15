import Handlebars from 'handlebars';

Handlebars.registerHelper('is', function (v1, v2, options) {
    if(v1 === v2) return options.fn(this);
});


Handlebars.registerHelper('compare', function (v1, op, v2, options) {
    switch (op) {
        case '>':
            return v1>v2?options.fn(this):options.inverse(this);
        case '>=':
            return v1>=v2?options.fn(this):options.inverse(this);
        case '<':
            return v1<v2?options.fn(this):options.inverse(this);
        case '<=':
            return v1<=v2?options.fn(this):options.inverse(this);
        case '==':
            return v1==v2?options.fn(this):options.inverse(this);
        default:
            return options.fn(this);
    }
});

Handlebars.registerPartial(
    "common-style",
    `
<style>
html, body {
    margin: 0;
    padding: 0;
}
</style>   
`
);

Handlebars.registerPartial(
    "common-script",
    `
<script>
(() => {
    const topFrame = window.frameElement;
    if (topFrame) {
        const debouncedHandler = () => {
            const height = document.documentElement.offsetHeight;
            topFrame.style.height = (height) + 'px';
        };
        const observe = new ResizeObserver(debouncedHandler);
        observe.observe(document.documentElement);
    }
})();
</script>   
`
);
