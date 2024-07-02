import test from 'ava';
import stableFunction from 'stable-function';
import randomObjectValue from './index.js';

const fixture = {
	foo: 'a',
	bar: 'b',
	baz: 'c',
	faz: 'd',
};

test('main', t => {
	t.false(stableFunction(() => randomObjectValue(fixture)));

	for (let index = 0; index < 1000; index++) {
		t.is(typeof randomObjectValue(fixture), 'string');
	}
});
