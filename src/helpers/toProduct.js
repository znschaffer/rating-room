import { parseName, parseSlug, normalize } from './';

/**
 * Updates a url with search parameters to match product name of product passed in.
 * @param {URL} url a URL object
 * @param {object} product
 * @returns {URL} a URL object with search parameters appended.
 */
const setUrlParam = (url, product) => {
	url.searchParams.set('product', parseName(product.name));
	return url;
};

/**
 * Updates Window URL and checks that it is equal to product name
 * @param {URL} url a URL object
 * @param {product} product product to check URL against
 * @returns {Boolean} True if URL parameter is equal to product name
 */
const didWinUrlUpdate = (url, product) => {
	window.history.pushState(window.history.state, '', url);
	const params = new URLSearchParams(window.location.search).get('product');
	return parseSlug(params) === normalize(product.name);
};

/**
 * Takes a `product` and `currentProduct` store
 * Sets URL params to parsed product name and updates Browser URL
 * Sets `currentProduct` store to `product`.
 * @param {object} product The product to switch feature to.
 * @param {store} currentProduct currentProduct store
 */
export const toProduct = (product, currentProduct) =>
	didWinUrlUpdate(setUrlParam(new URL(window.location), product), product) &&
	currentProduct.set(product)
