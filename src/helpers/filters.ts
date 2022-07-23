import { getAvgRating } from '.'
import type { Product, Tag } from '$types'

export const defaultFilter = { selectedCat: 0, selectedRating: 0 }

export const filterByCat = ($products:Product[], value:string, $tags:Tag[]) =>
$products.filter((product) => {
  if (product.tags) {
    const selectedTagId = $tags.find((tag) => tag.name === value)._id;
    const productTags = product.tags.map((tag) => tag._ref);
    if (productTags.includes(selectedTagId)) return true;
  } else return false;
});

export const filterByRating = (products:Product[], value:string) => products.filter((product) => product.rating && getAvgRating(product.rating) >= Number(value));

