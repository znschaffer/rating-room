<script>
	export let tag;
	import { tags, currentProduct, productsView, products, filters } from '$lib/stores';
	import { filterProductsBy, resetParams } from '$helpers';

	const tagName = $tags.find((dirTag) => dirTag._id === tag._ref).name;

	const filter = () => {
		currentProduct.set({});
		productsView.set(
			filterProductsBy({ type: 'tag', value: tagName, products: $products, tags: $tags })
		);
		filters.set({ ...$filters, selectedCat: tagName });
		resetParams();
	};
</script>

<button class="container" on:click={filter}>{tagName}</button>

<style lang="postcss">
	button:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}

	.container {
		@apply text-sm flex rounded-md pl-2 pr-2 pt-1 pb-1 bg-gray-200 w-auto;
	}
</style>
