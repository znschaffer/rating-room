<script lang="ts">
	import '../app.css';
	import { products, productsView, currentProduct, filters } from '$lib/stores';
	import { defaultFilter, didWinUrlUpdate, resetState, updateUrlParam } from '$helpers';
	import Products from '$lib/Layout/Products.svelte';
	import Header from '$lib/Layout/Header.svelte';
	import Search from '$lib/Layout/Search.svelte';
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';

	const reset = () => {
		productsView.set($products);
		history.pushState(...resetState());
		currentProduct.set({});
		filters.set(structuredClone(defaultFilter));
	};

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

	const { main, container, sidebar } = {
		main: 'flex w-screen h-screen sfmono',
		container: 'flex flex-col h-screen justify-start shrink-0 overflow-auto w-40',
		sidebar: ' flex flex-col shrink-0'
	};
</script>

<main class={main}>
	<div class={container}>
		<Header {reset} />
		<div class={sidebar}>
			<Search />
			{#if !Object.keys($currentProduct).length}
				<Filters {reset} />
				<Sort />
			{:else}
				<Products productsView={$productsView} {currentProduct} on:toProduct={goToProduct} />
			{/if}
		</div>
	</div>
	<slot />
</main>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
