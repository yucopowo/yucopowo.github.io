```javascript {demo type=module}
import _ from 'https://esm.sh/lodash';
const root = document.createElement('div');
document.body.appendChild(root);
document.body.style.backgroundColor = 'yellow';
root.innerHTML = _.camelCase('hello javascript模板');
```
