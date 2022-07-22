<script>
	import '../app.css';
	import { products, productsView, currentProduct, filters } from '$lib/stores';
	import { defaultFilter, resetParams } from '$helpers';
	import Products from '$lib/Layout/Products.svelte';
	import Header from '$lib/Layout/Header.svelte';
	import Search from '$lib/Layout/Search.svelte';
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';

	const reset = () => {
		productsView.set($products);
		resetParams();
		currentProduct.set({});
		filters.set(structuredClone(defaultFilter));
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
			<Filters {reset} />
			<Sort />
			{:else}
			<Products productsView={$productsView} {currentProduct}/>
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
