<script>
	import Feature from '$lib/Feature.svelte';
	import { page } from '$app/stores';
	import { products, currentProduct, tags, productsView } from '$lib/stores';
	import { parseSlug } from '$helpers/parse.js';
	export let data;

	products.set(data.products);
	tags.set(data.tags);
	productsView.set(data.products);

	let currentProductName = parseSlug($page.params.slug);
	currentProduct.set($products.find((product) => product.name == currentProductName));

	let currentProductIndex = $products.findIndex((product) => product.name == $currentProduct.name);
</script>

<div class="container">
	<Feature product={$currentProduct} />
</div>
