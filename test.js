import test from 'ava';
import stableFn from 'stable-fn';
import fn from './';

const fixture = {
	foo: 'a',
	bar: 'b',
	baz: 'c',
	faz: 'd'
};

test(t => {
	t.false(stableFn(() => fn(fixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof fn(fixture), 'string');
	}
});
