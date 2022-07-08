<script>
	import Feature from '$lib/Feature.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
	import { products, currentProduct } from '$lib/stores';

	let currentProductIndex = $products.findIndex((product) => product.name == $currentProduct.name);

	function nextProduct() {
		if (currentProductIndex < $products.length - 1) {
			currentProductIndex++;
		} else {
			currentProductIndex = 0;
		}
		currentProduct.set($products[currentProductIndex]);
	}

	function prevProduct() {
		console.log(currentProductIndex, $products.length);
		if (currentProductIndex > 0) {
			currentProductIndex--;
		} else {
			currentProductIndex = $products.length - 1;
		}
		currentProduct.set($products[currentProductIndex]);
	}
</script>

<div class="container">
	<Sidebar />
	<Feature product={$currentProduct} {prevProduct} {nextProduct} />
</div>
