<script>
	import { browser } from '$app/env';
	import Grid from '$lib/Grid.svelte';
	import Feature from '$lib/Feature/Feature.svelte';
	import { products, productsView, tags, currentProduct, emotions } from '$lib/stores';
	import { findProdFromParam, getProdParam, resetParams } from '$helpers';

	export let data;

	products.set(data.products);
	productsView.set(data.products);
	tags.set(data.tags);
	emotions.set(data.emotions);

	console.log($products)

	const load = () => {
		currentProduct.set(findProdFromParam(getProdParam(), $products));
		if (getProdParam() && JSON.stringify($currentProduct) === '{}') resetParams();
	};

	if (browser) {
		load();
		window.onpopstate = () => {
			load();
		};
	}

	const { container } = {
		container: 'h-screen overflow-auto w-screen'
	};
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div class={container}>
	{#if Object.keys($currentProduct).length}
		<Feature />
	{:else}
		<Grid products={$productsView} />
	{/if}
</div>
