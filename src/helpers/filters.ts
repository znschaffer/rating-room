import { avgRating } from '$helpers';
import type { FullProduct, Tag } from '$types';

export type TagArgs = {
	value: string;
	$tags: Tag[];
};

export type RatingArgs = {
	value: string | number;
};

/** Default value for filter selectors, saved in store */
export const defaultFilter = { selectedCat: 0, selectedRating: 0 };

/** Rating greater than what is passed in */
export const _ratingHigher = (product: FullProduct, { value }: RatingArgs) =>
	product.rating && avgRating(product.rating) >= Number(value);

/** Matches tags according to passed value */
export const _matchesTag = (product: FullProduct, { value, $tags }: TagArgs): boolean => {
	try {
		if (product.tags) {
			const selectedTagId = $tags.find((tag) => tag.name === value)._id;
			const productTags = product.tags.map((tag) => tag._ref);
			if (productTags.includes(selectedTagId)) return true;
		} else return false;
	} catch {
		return true;
	}
};

/** Filters products */
export const filterProductsBy = (type: string, products: FullProduct[], config) =>
	products.filter((product) => {
		switch (type) {
			case 'tag':
				return _matchesTag(product, config);
			case 'rating':
				return _ratingHigher(product, config);
		}
	});
