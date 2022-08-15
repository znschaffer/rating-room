import { normalize, parseSlug, parseName } from '.';
import type { UrlObject } from 'url';
import type { Product } from '$types';

/** Gets parameter from URL of field. Defaults to 'product' */
export const getProdParam = (field = 'product'): string =>
	new URLSearchParams(window.location.search).get(field) || '';

/** Finds a product in products store with matching name as parameter. */
export const findProdFromParam = (
	param: URLSearchParams,
	$products: Product[]
): Product | Record<string, never> =>
	$products.find(({ name }) => normalize(name) === parseSlug(param)) || {};

/** Resets params and navigates back to index */
export const resetParams = () => history.pushState({}, '', new URL(window.location.origin));

/** Updates a url with search parameters with name of product parameter. */
export const setUrlParam = (url: URL, product: Product): UrlObject => {
	url.searchParams.set('product', parseName(product.name));
	return url;
};
