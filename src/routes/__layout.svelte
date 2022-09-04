<script lang="ts">
	import '../app.css';
	import { products, productsView, currentProduct, filters } from '$lib/stores';
	import { defaultFilter, resetHistory, goToProduct } from '$helpers';
	import Products from '$lib/Layout/Products.svelte';
	import Header from '$lib/Layout/Header.svelte';
	import Search from '$lib/Layout/Search.svelte';
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';

	const reset = () => {
		productsView.set($products);
		resetHistory();
		currentProduct.set({});
		filters.set(structuredClone(defaultFilter));
	};
</script>

<main class="main sfmono">
	<div class="container">
		<Header {reset} />
		<div class="sidebar">
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

<style lang="postcss">
	.main {
		@apply flex w-screen h-screen;
	}
	.container {
		@apply flex flex-col h-screen justify-start shrink-0 overflow-auto w-40;
	}
	.sidebar {
		@apply flex flex-col shrink-0;
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
