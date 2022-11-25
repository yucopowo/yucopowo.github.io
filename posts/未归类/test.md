```html {demo}
<html>
    
<head>
    <style>
        body {
            height: 100px;
            background-color: blue;
        }
    </style> 
</head>

<body>
    <div id="root">"html模板"</div> 
    
    <script type="module">
        import _ from 'https://esm.sh/lodash';
        const root = document.getElementById('root');
        setTimeout(() => {
            document.body.style.backgroundColor = 'yellow';
            root.innerHTML = _.camelCase('hello html模板');
        }, 3000);
    </script>
</body>

</html>
```
