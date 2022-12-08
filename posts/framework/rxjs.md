# rxjs

## rxjs

```javascript {demo type=module container=root height=100}
import { range, filter, map } from 'https://esm.sh/rxjs';
 
range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));

```
