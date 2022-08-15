import { normalize, parseSlug, parseName } from '$helpers';
import { describe, expect, test } from 'vitest';

describe('normalize', () => {
	const testStrings = ['aPPLe', '    apPle   ', '    aPp l e     ', '  pear  '];
	const key = ['apple', 'apple', 'app l e', 'pear'];

	test('it should return lowercased trimmed strings', () => {
		testStrings.forEach((str, i) => {
			expect(normalize(str)).toEqual(key[i]);
		});
	});
});

describe('parseSlug', () => {
	const testStrings = ['test-product', 'TEST-pro-duct', 't-e-s-t-p-r-o-d-u-c-t'];
	const key = ['test product', 'test pro duct', 't e s t p r o d u c t'];

	test('it should remove dashes and replace with spaces', () => {
		testStrings.forEach((str, i) => {
			expect(parseSlug(str)).toEqual(key[i]);
		});
	});
});

describe('parseName', () => {
	const testStrings = ['test-product', 'test-pro-duct', 't-e-s-t-p-r-o-d-u-c-t'];
	const key = ['test product', 'test pro duct', 't e s t p r o d u c t'];

	test('it should replace spaces with dashes', () => {
		key.forEach((str, i) => {
			expect(parseName(str)).toEqual(testStrings[i]);
		});
	});
});
