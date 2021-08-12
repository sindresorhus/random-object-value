import {expectType} from 'tsd';
import randomObjectProperty from './index.js';

expectType<string | number>(randomObjectProperty({foo: '🐴', bar: 1}));
