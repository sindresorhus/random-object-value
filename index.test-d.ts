import {expectType} from 'tsd';
import randomObjProp = require('.');

expectType<string | number>(randomObjProp({foo: '🐴', bar: 1}));
