import { singleFilter } from '$helpers';
import type { Product, Tag } from '$types';
import { describe, expect, test } from 'vitest';
import { testProducts, testTags } from './data';

describe('filterProducts', () => {
	test('filters products by passed category tag', () => {
		expect(
			singleFilter({
				type: 'tag',
				products: testProducts as Product[],
				value: 'Exercise',
				tags: testTags as Tag[]
			})
		).toHaveLength(1);
		expect(
			singleFilter({
				type: 'tag',
				products: testProducts as Product[],
				value: 'Electronics',
				tags: testTags as Tag[]
			})
		).toHaveLength(1);
	});

	test('filter by tag returns nothing if tag does not exist', () => {
		expect(
			singleFilter({
				type: 'tag',
				products: testProducts as Product[],
				value: 'grapes',
				tags: testTags as Tag[]
			})
		).toEqual([]);
	});

	test('filters ratings only greater than # passed in', () => {
		expect(
			singleFilter({ type: 'rating', products: testProducts as Product[], value: 3 })
		).toHaveLength(3);

		expect(
			singleFilter({ type: 'rating', products: testProducts as Product[], value: 5 })
		).toHaveLength(0);
	});
});
