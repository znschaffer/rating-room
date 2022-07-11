<script>
	import Feature from '$lib/Feature.svelte';
	import { productsView, currentProduct } from '$lib/stores';
	import normalize from '$helpers/normalize';

	let currentProductIndex = $productsView.findIndex(
		({name}) => normalize(name) === normalize($currentProduct.name)
	);

	function nextProduct() {
		if (currentProductIndex < $productsView.length - 1) {
			currentProductIndex++;
		} else {
			currentProductIndex = 0;
		}
		currentProduct.set($productsView[currentProductIndex]);
	}

	function prevProduct() {
		console.log(currentProductIndex, $productsView.length);
		if (currentProductIndex > 0) {
			currentProductIndex--;
		} else {
			currentProductIndex = $productsView.length - 1;
		}
		currentProduct.set($productsView[currentProductIndex]);
	}
</script>

<div class="container">
	<Feature product={$currentProduct} {prevProduct} {nextProduct} />
</div>
