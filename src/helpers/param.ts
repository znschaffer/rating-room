import { normalize, parseSlug, parseName } from '.';
import type { Product } from '$types';
import type { Writable } from 'svelte/store';

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
export const _resetState = () => [{}, '', new URL(window.location.origin)] as const;

/** Creates a new URL and then appends parsed product to it. */
export const _updateUrlParam = (url: string) => {
	const updatedUrl = new URL(url);
	return (product: Product) => {
		updatedUrl.searchParams.set('product', parseName(product.name));
		return updatedUrl;
	};
};

/**
 * Checks that window parameters are equal to passed product name
 */
export const _didWinUrlUpdate = (product: Product): boolean => {
	const params = new URLSearchParams(window.location.search).get('product');
	return parseSlug(params) === normalize(product.name);
};

export const _pushParams = (url: URL) => window.history.pushState(window.history.state, '', url);

/** Public */

/** Navigates to product */
export const goToProduct = ({ detail }) => {
	const { product, currentProduct } = detail;
	const urlWithParam = _updateUrlParam(window.location.href)(product);
	_pushParams(urlWithParam);

	return _didWinUrlUpdate(product) ? currentProduct.set(product) : resetHistory();
};

export const resetHistory = () => window.history.pushState(..._resetState());

export const setCurrProdFromParam = (
	currentProduct: Writable<Product | Record<string, unknown>>,
	products: Product[]
) => currentProduct.set(findProdFromParam(getProdParam(), products));
