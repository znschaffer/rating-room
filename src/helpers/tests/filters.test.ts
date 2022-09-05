import {
	singleFilter,
	_findProductId,
	_getDoubleArgs,
	_getSingleArgs,
	_matchesTag,
	_productIncludesRef,
	_ratingHigher
} from '$helpers';
import type { Product, Ref, Tag } from '$types';
import { describe, expect, test } from 'vitest';
import { testProducts, testTags } from './data';

export const nameAndUUID = [
	{ name: 'Media', uuid: '033beca9-6fef-445c-91dd-55f8ab480831' },
	{ name: 'Drink', uuid: 'feb491f3-2048-49fb-9212-c04adc624e8b' },
	{ name: 'Appliance', uuid: 'dccb56bb-7ccc-4638-9606-755a6be19f77' }
];

export const invalidNames = ['Snuff', 'Bear', 'Consolation'];

describe('Private Filter Functions', () => {
	describe('_findProductId', () => {
		it('Should find a tag id from an array of tags and return tag UUID', () => {
			nameAndUUID.forEach(({ name, uuid }) => expect(_findProductId(testTags, name)).toEqual(uuid));
		});
		it('Should be undefined if name does not exist in list of tags', () => {
			invalidNames.forEach((name) => expect(_findProductId(testTags, name)).toBeUndefined);
		});
	});

	describe('_productIncludesRef', () => {
		const productsWithRef = testProducts.map((product, i) => ({
			ref: product.tags[0]._ref,
			product: testProducts[i]
		}));

		it('Should be true when passed tags include id', () => {
			productsWithRef.forEach(({ ref, product }) =>
				expect(_productIncludesRef(product, ref)).toBeTruthy()
			);
		});
		it('Should be false when passed tags do not include id', () => {
			testProducts.forEach((product) => {
				expect(_productIncludesRef(product, '0123445')).toBeFalsy();
			});
		});
	});

	describe('_matchesTag', () => {
		it('returns true if product has tags and found reference to tags', () => {
			const testThree = testProducts.slice(2);
			const categories = ['Accessory', 'Electronics', 'Tool'];

			testThree.map((product, i) =>
				expect(_matchesTag(product, { value: categories[i], $tags: testTags })).toBeTruthy()
			);
		});
		it('returns false if product has tags and did not find reference to tags', () => {
			testProducts.map((product) =>
				expect(_matchesTag(product, { value: 'abcd', $tags: testTags })).toBeFalsy()
			);
		});
		it('returns true if product does not have tags', () => {
			const target = [];

			Object.assign(target, testProducts);
			const productsNoTags = target.map((product) => {
				delete product.tags;
				return product;
			});

			productsNoTags.map((product) =>
				expect(_matchesTag(product, { value: 'abcd', $tags: testTags })).toBeTruthy()
			);
		});
	});

	describe('_ratingHigher', () => {
		it('is true when rating of product is higher', () => {
			testProducts.forEach((product) => expect(_ratingHigher(product, { value: 0 })).toBeTruthy());
		});
		it('is false when rating of product is higher', () => {
			testProducts.forEach((product) => expect(_ratingHigher(product, { value: 10 })).toBeFalsy());
		});
	});

	describe('_getSingleArgs', () => {
		test('it should pass in the correct format', () => {
			expect(_getSingleArgs('rating', '', '', [], [])).toEqual({
				type: 'rating',
				value: '',
				products: []
			});
			expect(_getSingleArgs('tag', '', '', [], [])).toEqual({
				type: 'tag',
				value: '',
				products: [],
				tags: []
			});
		});
	});

	describe('_getDoubleArgs', () => {
		test('it should pass in the correct format', () => {
			expect(_getDoubleArgs('rating', '', [])).toEqual({ type: 'tag', value: '', tags: [] });
			expect(_getDoubleArgs('tag', '', [])).toEqual({ type: 'rating', value: '' });
		});
	});
});

describe('Public Filter Functions', () => {
	describe('singleFilter', () => {
		test('Single filter filters products by passed category tag', () => {
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

		test('Single filter returns nothing if tag does not exist', () => {
			expect(
				singleFilter({
					type: 'tag',
					products: testProducts as Product[],
					value: 'grapes',
					tags: testTags as Tag[]
				})
			).toEqual([]);
		});

		test('Single filter filters ratings only greater than # passed in', () => {
			expect(
				singleFilter({ type: 'rating', products: testProducts as Product[], value: 3 })
			).toHaveLength(3);

			expect(
				singleFilter({ type: 'rating', products: testProducts as Product[], value: 5 })
			).toHaveLength(0);
		});
	});

	describe('multiFilter', () => {
		test.todo('multifilter filters by one if only one passed in'), () => {};
	});

	test.todo('multifilter filters by two if another value passed in', () => {});
});
