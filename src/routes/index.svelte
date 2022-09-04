<script lang="ts">
	import { browser } from '$app/env';
	import Grid from '$lib/Grid.svelte';
	import Feature from '$lib/Feature/Feature.svelte';
	import { products, productsView, currentProduct } from '$lib/stores';
	import {
		didWinUrlUpdate,
		findProdFromParam,
		getProdParam,
		resetState,
		updateUrlParam
	} from '$helpers';

	productsView.set($products);

	const load = () => {
		currentProduct.set(findProdFromParam(getProdParam(), $products));
		if (getProdParam() && JSON.stringify($currentProduct) === '{}')
			history.pushState(...resetState());
	};

	if (browser) {
		load();
		window.onpopstate = () => {
			load();
		};
	}

	/**
	 * Takes a `product` and `currentProduct` store
	 * Sets URL params to parsed product name and updates Browser URL
	 * Sets `currentProduct` store to `product`.
	 */
	const goToProduct = ({ detail }) => {
		const { product, currentProduct } = detail;
		const urlWithParam = updateUrlParam(window.location.href)(product);
		window.history.pushState(window.history.state, '', urlWithParam);

		return didWinUrlUpdate(product)
			? currentProduct.set(product)
			: history.pushState(...resetState());
	};
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
