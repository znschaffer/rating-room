<script lang="ts">
	import '../app.css';
	import { products, productsView, currentProduct, filters } from '$lib/stores';
	import { defaultFilter, resetHistory, goToProduct } from '$helpers';
	import Products from '$lib/Layout/Products.svelte';
	import Header from '$lib/Layout/Header.svelte';
	import Search from '$lib/Layout/Search.svelte';
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';
	import MediaQuery from 'svelte-media-query';

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
			<MediaQuery query="(min-width: 640px)" let:matches>
				{#if matches}
					{#if !Object.keys($currentProduct).length}
						<Filters {reset} />
						<Sort />
					{:else}
						<Products productsView={$productsView} {currentProduct} on:toProduct={goToProduct} />
					{/if}
				{/if}
			</MediaQuery>
		</div>
	</div>

	<slot />
</main>

<style lang="postcss">
	.main {
		@apply flex w-screen h-screen flex-col sm:flex-row;
	}
	.container {
		@apply flex flex-col justify-start shrink-0 overflow-auto m-auto sm:w-40 sm:h-screen sm:m-0;
	}
	.sidebar {
		@apply flex flex-col shrink-0;
	}
	::-webkit-scrollbar {
		display: none;
	}
</style>
