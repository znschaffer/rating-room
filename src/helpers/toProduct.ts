import { parseSlug, normalize, setUrlParam, resetParams } from '.';
import type { Product } from '$types';
import type { Writable} from "svelte/store"


/**
 * Updates Window URL and checks that it is equal to product name
 */
const didWinUrlUpdate = (url: URL, product:Product): boolean => {
	window.history.pushState(window.history.state, '', url);
	const params = new URLSearchParams(window.location.search).get('product');
	return parseSlug(params) === normalize(product.name);
};

/**
 * Takes a `product` and `currentProduct` store
 * Sets URL params to parsed product name and updates Browser URL
 * Sets `currentProduct` store to `product`.
 */
export const toProduct = (product: Product, currentProduct:Writable<Product>) =>
	didWinUrlUpdate(setUrlParam((new URL(window.location.href)), product), product)?
	currentProduct.set(product): resetParams()