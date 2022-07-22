import { normalize, parseSlug, parseName } from './';

/**
 * Gets parameter from URL of field. Defaults to 'product'
 * @param {string} field='product'
 * @returns {string} parameter of field
 */
export const getProdParam = (field = 'product') =>
	new URLSearchParams(window.location.search).get(field) || ''

/**
 * Finds a product in products store with matching name as parameter.
 * @param {*} param parameter
 * @param {*} $products products store
 * @returns
 */
export const findProdFromParam = (param, $products) => 
	$products.find(({ name }) => normalize(name) === parseSlug(param)) || {}

/**
 * Resets params and navigates back to index
 */
export const resetParams = () => history.pushState({}, '', new URL(window.location.origin));

/**
 * Updates a url with search parameters with name of product parameter.
 * @param {URL} url a URL object
 * @param {object} product
 * @returns {URL} a URL object with search parameters appended.
 */
export const setUrlParam = (url, product) => {
	url.searchParams.set('product', parseName(product.name));
	return url;
};


