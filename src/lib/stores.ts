import type { Tag, Product, Emotion } from '$types';
import { defaultFilter } from '$helpers';
import { writable, type Writable, readable, type Readable } from 'svelte/store';
import { client } from '$lib/sanityClient';

async function fetchProductData(): Promise<Product[]> {
	const products: Product[] = await client.fetch('*[_type == "product"]');
	return products;
}
async function fetchEmotionData(): Promise<Emotion[]> {
	const emotions: Emotion[] = await client.fetch('*[_type == "emotion"]');
	return emotions;
}
async function fetchTagData(): Promise<Tag[]> {
	const tags: Tag[] = await client.fetch('*[_type == "tag"]');
	return tags;
}

export const products: Readable<Product[] | []> = readable(await fetchProductData());
export const emotions: Readable<Emotion[] | []> = readable(await fetchEmotionData());
export const tags: Readable<Tag[] | []> = readable(await fetchTagData());

export const productsView: Writable<Product[]> = writable([]);
export const currentProduct: Writable<Product | Record<string, never>> = writable({});
export const filters = writable(defaultFilter);
