<script>
	import Grid from '$lib/Grid.svelte';
	import { products, productsView, tags } from '$lib/stores';
	export let data;
	products.set(data.products);
	tags.set(data.tags)

	productsView.set(data.products);
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div >
	<Grid products={$productsView} />
</div>
