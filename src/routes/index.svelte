<script lang="ts">
	import { browser } from '$app/env';
	import Grid from '$lib/Grid.svelte';
	import Feature from '$lib/Feature/Feature.svelte';
	import { products, productsView, currentProduct } from '$lib/stores';
	import { findProdFromParam, getProdParam, goToProduct, resetHistory } from '$helpers';

	$: productsView.set($products);

	const load = () => {
		currentProduct.set(findProdFromParam(getProdParam(), $products));
		if (getProdParam() && JSON.stringify($currentProduct) === '{}') resetHistory();
	};

	if (browser) {
		load();
		window.onpopstate = () => {
			load();
		};
	}
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div class="container">
	{#if Object.keys($currentProduct).length}
		<Feature on:toProduct={goToProduct} />
	{:else}
		<Grid products={$productsView} on:toProduct={goToProduct} />
	{/if}
</div>

<style lang="postcss">
	.container {
		@apply h-screen overflow-auto w-screen;
	}
</style>
