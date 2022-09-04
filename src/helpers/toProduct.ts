import { parseSlug, normalize, updateUrlParam, resetState } from '.';
import type { Product } from '$types';
import type { Writable } from 'svelte/store';

/**
 * Updates Window URL and checks that it is equal to product name
 */
const didWinUrlUpdate = (product: Product): boolean => {
	const params = new URLSearchParams(window.location.search).get('product');
	return parseSlug(params) === normalize(product.name);
};

/**
 * Takes a `product` and `currentProduct` store
 * Sets URL params to parsed product name and updates Browser URL
 * Sets `currentProduct` store to `product`.
 */
export const toProduct = (product: Product, currentProduct: Writable<Product>) => {
	const urlWithParam = updateUrlParam(window.location.href)(product);

	window.history.pushState(window.history.state, '', urlWithParam);

	return didWinUrlUpdate(product)
		? currentProduct.set(product)
		: history.pushState(...resetState());
};
