<script>
	import '../app.css';
	import Products from '$lib/Layout/Products.svelte'
	import Header from '$lib/Layout/Header.svelte'
	import Search from '$lib/Layout/Search.svelte'
	import Filters from '$lib/Layout/Filters.svelte';
	import Sort from '$lib/Layout/Sort.svelte';

	const { main,  sidebar } = {
		main: 'flex w-screen h-screen sfmono',
		sidebar: 'flex flex-col h-screen overflow-auto w-40 shrink-0'
	};
</script>

<main class={main}>
	<div class={sidebar}>
		<Header />
		<Search />
		<Filters />
		<Products />
	</div>
	<slot />
</main>
