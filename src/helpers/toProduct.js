import {normalize, parseName} from './index';

export const toProduct = (product, currentProduct) => {
  const url = new URL(window.location);
  url.searchParams.set('product', normalize(parseName(product.name)));
  window.history.pushState({}, '', url);
  currentProduct.set(product)
}
