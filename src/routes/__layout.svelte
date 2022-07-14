<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { products, productsView, currentProduct } from '$lib/stores';
	import Products from '$lib/Layout/Products.svelte';
	import Header from '$lib/Layout/Header.svelte';
	import Search from '$lib/Layout/Search.svelte';
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';
	let filters = { selectedCat: 0, selectedRating: 0 };

	const reset = () => {
		productsView.set($products);
		const url = new URL(window.location);
		window.history.pushState({}, '', url);
		currentProduct.set({});
		filters = { selectedCat: 0, selectedRating: 0 };
	};

	const { main, sidebar } = {
		main: 'flex w-screen h-screen sfmono',
		sidebar: 'flex flex-col justify-start h-screen overflow-auto w-52 shrink-0'
	};
</script>

<main class={main}>
	<div class={sidebar}>
		<Header {reset} />
		{#if !Object.keys($currentProduct).length}
			<Search />
			<Filters bind:filters {reset} />
			<Sort />
		{:else}
			<Products productsView={$productsView} {currentProduct} />
		{/if}
	</div>
	<slot />
</main>

<style>
	::-webkit-scrollbar {
		display: none;
	}
</style>
