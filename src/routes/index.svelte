<script>
	import { urlFor } from '$lib/sanityClient';
	export let products;
	export let ratings;
	console.log(products);
</script>

<svelte:head>
	<title>Rating Room</title>
</svelte:head>

<h1>Rating Room</h1>

{#each products as product}
	<p>{product.name}</p>
	{#if product.image}
		<img src={urlFor(product.image).width(200).url()} alt={product.name} />
	{/if}
{/each}
