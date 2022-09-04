import { normalize, parseSlug, parseName } from '.';
import type { Product } from '$types';

/** Gets parameter from URL of field. Defaults to 'product' */
export const getProdParam = (field = 'product'): string =>
	new URLSearchParams(window.location.search).get(field) || '';

/** Finds a product in products store with matching name as parameter. */
export const findProdFromParam = (
	param: string,
	$products: Product[]
): Product | Record<string, never> =>
	$products.find(({ name }) => normalize(name) === parseSlug(param)) || {};

/** Reset value with empty parameters */
export const resetState = () => [{}, '', new URL(window.location.origin)] as const;

/** Creates a new URL and then appends parsed product to it. */
export const updateUrlParam = (url: string) => {
	const updatedUrl = new URL(url);
	return (product: Product) => {
		updatedUrl.searchParams.set('product', parseName(product.name));
		return updatedUrl;
	};
};
