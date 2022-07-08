<script>
	import Grid from '$lib/Grid.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import { products } from '$lib/stores';
	export let data;
	products.set(data);
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<div class="container">
	<Sidebar />
	<Grid products={$products} />
</div>
