import type { Tag, Product, Emotion } from '$types';
import { writable, type Writable } from 'svelte/store';

export const products: Writable<Product[]|[]> = writable([]);
export const emotions: Writable<Emotion[]|[]> = writable([]);
export const tags: Writable<Tag[]|[]> = writable([]);

export const productsView: Writable<Product[]> = writable([]);
export const currentProduct: Writable<Product|Record<string, never>> = writable({});
export const filters = writable({ selectedCat: 0, selectedRating: 0 });
