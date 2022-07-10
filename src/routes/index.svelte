<script>
	import Grid from '$lib/Grid.svelte';
	import { products, productsView } from '$lib/stores';
	export let data;
	products.set(data);
	productsView.set(data);
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div >
	<Grid products={$productsView} />
</div>
