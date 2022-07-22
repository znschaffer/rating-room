<script>
	import '../app.css';
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

	const { main, container, sidebar } = {
		main: 'flex w-screen h-screen sfmono',
		container: 'flex flex-col h-screen justify-start shrink-0 overflow-auto w-56',
		sidebar: ' flex flex-col shrink-0'
	};
</script>

<main class={main}>
	<div class={container}>
		<Header {reset} />
		<div class={sidebar}>
			<Search />
			{#if !Object.keys($currentProduct).length}
			<Filters bind:filters {reset} />
			<Sort />
			{:else}
			<Products productsView={$productsView} {currentProduct} />
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
