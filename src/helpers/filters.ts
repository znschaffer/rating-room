import { getAvgRating } from '$helpers';
import type { Product, Tag } from '$types';

/* Default value for filter selectors, saved in store */
export const defaultFilter = { selectedCat: 0, selectedRating: 0 };

/* Filters products by matching tags according to passed value */
export const filterByCat = (products: Product[], value: string, tags: Tag[]): Product[] =>
	products.filter((product) => {
		try {
			if (product.tags) {
				const selectedTagId = tags.find((tag) => tag.name === value)._id;
				const productTags = product.tags.map((tag) => tag._ref);
				if (productTags.includes(selectedTagId)) return true;
			} else return false;
		} catch {
			return true;
		}
	});

/* Filters by rating greater than what is passed in */
export const filterByRating = (products: Product[], value: string | number) =>
	products.filter((product) => product.rating && getAvgRating(product.rating) >= Number(value));
