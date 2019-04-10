/**
Get a random property from an object.

@example
```
import randomObjProp = require('random-obj-prop');

randomObjProp({foo: '🐴', bar: '🦄'});
//=> '🦄'
```
*/
declare function randomObjProp<T>(input: { [key: string]: T }): T;

export = randomObjProp;
