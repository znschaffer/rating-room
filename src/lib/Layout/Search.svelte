<script>
	import { products, productsView } from '$lib/stores';
	import { includesName } from '$helpers';

	const searchProducts = (e) => {
		productsView.set($products.filter((product) => includesName(e.target.value, product)));
	};
</script>

<div class="container">
	<input on:input={searchProducts} class="input" placeholder="search" />
</div>

<style lang="postcss">
	.container {
		@apply h-12 ml-auto mr-auto flex justify-center items-center;
	}

	.input {
		@apply outline outline-1 w-28 focus:outline-blue-600 p-1 text-sm;
	}
</style>
