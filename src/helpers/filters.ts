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

/** Default value for filter selectors, saved in store */
export const defaultFilter = { selectedCat: 0, selectedRating: 0 };

/** Returns matching product tag from full list of tags */
export const findProductId = (tags: Tag[], name: string): string =>
	tags.find((tag) => tag.name === name)?._id;

/** Checks whether product has a tagId that matches passed id string */
export const productIncludesRef = (product: Product, id: string): boolean =>
	product.tags.map((tag) => tag._ref).includes(id) ? true : false;

/** Matches tags according to passed value */
export const _matchesTag = (product: Product, { value, $tags }: TagArgs): boolean =>
	product?.tags ? productIncludesRef(product, findProductId($tags, value)) : true;

/** Rating greater than what is passed in */
export const _ratingHigher = (product: Product, { value }: RatingArgs) =>
	product.rating && avgRating(product.rating) >= Number(value);

/** Filters products */
export const filterProductsBy = ({ type, value, products, tags = [] }: FilterArgs) =>
	products.filter((product) => {
		switch (type) {
			case 'tag':
				if (typeof value === 'number') value = value.toString();
				return _matchesTag(product, { value, $tags: tags });
			case 'rating':
				return _ratingHigher(product, { value });
		}
	});
