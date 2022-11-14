import Handlebars from 'handlebars';

const template = Handlebars.compile(`

<head>
<meta charset="utf-8">

{{>common-style}}
</head>

<body>

<script {{#is node.attrs.type 'module'}}type="module"{{/is}}>
{{{node.value}}}
</script>   

{{#unless node.attrs.height}}
{{>common-script}}
{{/unless}}

</body>
 

`);

export default template;
