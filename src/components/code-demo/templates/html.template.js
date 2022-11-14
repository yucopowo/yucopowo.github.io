import Handlebars from 'handlebars';

const template = Handlebars.compile(`
{{>common-style}}

{{{node.value}}}



{{#unless node.attrs.height}}
{{>common-script}}
{{/unless}}

`);

export default template;
