((Handlebars, utils) => {

    Handlebars.registerHelper('escapeTemplateString', function (code) {
        return '`'+utils.escapeTemplateString(code)+'`';
    });

    Handlebars.registerHelper('eq', function (v1, v2, options) {
        return (v1 === v2)?options.fn(this):options.inverse(this);
    });

    Handlebars.registerPartial(
        "head",
        `
        <meta charset="utf-8">

    <style>
        html, body {
            margin: 0;
            padding: 0;
        }
    </style>
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
})(self.Handlebars, self.modules.utils);
