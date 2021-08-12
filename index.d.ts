/**
Get a random property from an object.

@example
```
import randomObjectProperty from 'random-obj-prop';

randomObjectProperty({foo: '🐴', bar: '🦄'});
//=> '🦄'
```
*/
export default function randomObjectProperty<T>(object: Record<string, T>): T;
