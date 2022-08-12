import { filterByCat, filterByRating } from '$helpers';
import { describe, expect, test } from 'vitest';
import { testProducts, testTags } from './data';

describe('filterByCat', () => {
	test('filters products by passed category tag', () => {
		expect(filterByCat(testProducts, 'Exercise', testTags)).toHaveLength(1);
		expect(filterByCat(testProducts, 'Electronics', testTags)).toHaveLength(1);
	});

	test('returns unchanged products if tag does not exist', () => {
		expect(filterByCat(testProducts, 'grapes', testTags)).toEqual(testProducts);
	});
});

describe('filterByRating', () => {
	test('filterByRating returns products only greater than # passed in', () => {
		expect(filterByRating(testProducts, 3)).toHaveLength(3);

		expect(filterByRating(testProducts, 5)).toHaveLength(0);
	});
});
