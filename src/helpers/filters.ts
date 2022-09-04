import { avgRating } from '$helpers';
import type { Product, Tag } from '$types';

export type TagArgs = {
	value: string;
	$tags: Tag[];
};

export type RatingArgs = {
	value: string | number;
};

export type FilterArgs = {
	type: string;
	value: string | number;
	products: Product[];
	tags?: Tag[];
};

export type DefaultFilter = {
	selectedCat: string | number;
	selectedRating: string | number;
};

/** Returns matching product tag from full list of tags */
export const _findProductId = (tags: Tag[], name: string): string =>
	tags.find((tag) => tag.name === name)?._id;

/** Checks whether product has a tagId that matches passed id string */
export const _productIncludesRef = (product: Product, id: string): boolean =>
	product.tags.map((tag) => tag._ref).includes(id) ? true : false;

/** Matches tags according to passed value */
export const _matchesTag = (product: Product, { value, $tags }: TagArgs): boolean =>
	product?.tags ? _productIncludesRef(product, _findProductId($tags, value)) : true;

/** Rating greater than what is passed in */
export const _ratingHigher = (product: Product, { value }: RatingArgs) =>
	product.rating && avgRating(product.rating) >= Number(value);

export const _getSingleArgs = (name, rating, tag, products, tags) =>
	name === 'rating'
		? { type: 'rating', value: rating, products }
		: { type: 'tag', value: tag, products, tags };

export const _getDoubleArgs = (name, otherVal, tags) =>
	name === 'rating' ? { type: 'tag', value: otherVal, tags } : { type: 'rating', value: otherVal };

/** Public */

/** Default value for filter selectors, saved in store */
export const defaultFilter = { selectedCat: 0, selectedRating: 0 } as DefaultFilter;

/** Filters products */
export const singleFilter = ({ type, value, products, tags = [] }: FilterArgs) =>
	products.filter((product) => {
		switch (type) {
			case 'tag':
				if (typeof value === 'number') value = value.toString();
				return _matchesTag(product, { value, $tags: tags });
			case 'rating':
				return _ratingHigher(product, { value });
		}
	});

/** Returns either filter by one or two */
export const multiFilter = ({ name, otherVal, rating, tag, $tags, $products }) => {
	const filterArgs = _getSingleArgs(name, rating, tag, $products, $tags);
	const filterOne = singleFilter(filterArgs);

	if (!otherVal) return filterOne;

	const otherFilterArgs = _getDoubleArgs(name, otherVal, $tags);
	return singleFilter({ ...otherFilterArgs, products: filterOne });
};
