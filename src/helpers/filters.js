import { getAvgRating } from './'

export const defaultFilter = { selectedCat: 0, selectedRating: 0 }


export const filterByCat = ($products, value, $tags) =>
$products.filter((product) => {
  if (product.tags) {
    const selectedTagId = $tags.find((tag) => tag.name === value)._id;
    const productTags = product.tags.map((tag) => tag._ref);
    if (productTags.includes(selectedTagId)) return true;
  } else return false;
});

export const filterByRating = (products, value) => products.filter((product) => product.rating && getAvgRating(product.rating) >= Number(value));

