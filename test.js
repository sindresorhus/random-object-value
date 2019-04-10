import test from 'ava';
import stableFn from 'stable-fn';
import randomObjProp from '.';

const fixture = {
	foo: 'a',
	bar: 'b',
	baz: 'c',
	faz: 'd'
};

test('main', t => {
	t.false(stableFn(() => randomObjProp(fixture)));

	for (let i = 0; i < 1000; i++) {
		t.is(typeof randomObjProp(fixture), 'string');
	}
});
