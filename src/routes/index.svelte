<script>
	import Grid from '$lib/Grid.svelte';
	import Feature from '$lib/Feature.svelte';
	import { products, productsView, tags, currentProduct } from '$lib/stores';
	import { browser } from '$app/env';
	import normalize from '$helpers/normalize';
	import {parseSlug} from '$helpers/parse';

	export let data;
	products.set(data.products);
	tags.set(data.tags);

	productsView.set(data.products);
 
 if (browser && window.location.search) {
	const params = new URLSearchParams(window.location.search)
	const paramProd = params.get('product');

	if (paramProd){ 
		const foundProduct = $products.find(({name})=> normalize(name) === normalize(parseSlug(paramProd)))
		if (foundProduct){
			currentProduct.set(foundProduct)
		} else {
			const url = new URL(window.location.origin);

			history.pushState({}, '', url);
		}
	}
 }

</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div>
	{#if Object.keys($currentProduct).length}
	<Feature />
	{:else}
	<Grid products={$productsView} />
	{/if}
</div>
