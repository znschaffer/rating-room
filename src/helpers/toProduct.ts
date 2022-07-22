import { parseSlug, normalize, setUrlParam, resetParams } from '.';
import type { Product } from '../types';
import type { UrlObject } from "node_modules/@types/node/url.d"

/**
 * Updates Window URL and checks that it is equal to product name
 * @param {UrlObject} url a URL object
 * @param {Product} product product to check URL against
 * @returns {boolean} True if URL parameter is equal to product name
 */
const didWinUrlUpdate = (url: UrlObject, product:Product): boolean => {
	window.history.pushState(window.history.state, '', url);
	const params = new URLSearchParams(window.location.search).get('product');
	return parseSlug(params) === normalize(product.name);
};

/**
 * Takes a `product` and `currentProduct` store
 * Sets URL params to parsed product name and updates Browser URL
 * Sets `currentProduct` store to `product`.
 * @param {Product} product The product to switch feature to.
 * @param {any} currentProduct currentProduct store
 */
export const toProduct = (product: Product, currentProduct: any) =>
	didWinUrlUpdate(setUrlParam(new URL(window.location), product), product)?
	currentProduct.set(product): resetParams()