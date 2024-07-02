import test from 'ava';
import stableFunction from 'stable-function';
import randomObjectProperty from './index.js';

const fixture = {
	foo: 'a',
	bar: 'b',
	baz: 'c',
	faz: 'd',
};

test('main', t => {
	t.false(stableFunction(() => randomObjectProperty(fixture)));

	for (let index = 0; index < 1000; index++) {
		t.is(typeof randomObjectProperty(fixture), 'string');
	}
});
