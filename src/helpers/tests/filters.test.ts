import { filterProductsBy } from '$helpers';
import { describe, expect, test } from 'vitest';
import { testProducts, testTags } from './data';

describe('filterProducts', () => {
	test('filters products by passed category tag', () => {
		expect(
			filterProductsBy('tag', testProducts, { value: 'Exercise', $tags: testTags })
		).toHaveLength(1);
		expect(
			filterProductsBy('tag', testProducts, { value: 'Electronics', $tags: testTags })
		).toHaveLength(1);
	});

	test('filter by tag returns unchanged products if tag does not exist', () => {
		expect(filterProductsBy('tag', testProducts, { value: 'grapes', $tags: testTags })).toEqual(
			testProducts
		);
	});

	test('filters ratings only greater than # passed in', () => {
		expect(filterProductsBy('rating', testProducts, { value: 3 })).toHaveLength(3);

		expect(filterProductsBy('rating', testProducts, { value: 5 })).toHaveLength(0);
	});
});
