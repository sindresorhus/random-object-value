/**
Get a random value from an object.

@example
```
import randomObjectValue from 'random-object-value';

randomObjectValue({foo: '🐴', bar: '🦄'});
//=> '🦄'
```
*/
export default function randomObjectValue<T>(object: Record<string, T>): T;
