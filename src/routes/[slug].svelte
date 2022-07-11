<script>
	import Feature from '$lib/Feature.svelte';
	import NotFound from '$lib/NotFound.svelte';
	import { page } from '$app/stores';
	import { products, currentProduct, tags, productsView } from '$lib/stores';
	import { parseSlug } from '$helpers/parse.js';
	import normalize from '$helpers/normalize';
	export let data;

	products.set(data.products);
	tags.set(data.tags);
	productsView.set(data.products);

	let currProd = $products.find((product) => normalize(product.name) ===  parseSlug($page.params.slug))
	if (currProd) currentProduct.set(currProd);

</script>

<div class="container">
	{#if currProd}
	<Feature product={$currentProduct} />
	{:else}
	<NotFound/>
	{/if}
</div>
