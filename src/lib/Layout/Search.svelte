<script>
	import { products, productsView, currentProduct } from '$lib/stores';
	import { includesName } from '$helpers';
	import MediaQuery from 'svelte-media-query';

	const searchProducts = (e) => {
		productsView.set($products.filter((product) => includesName(e.target.value, product)));
	};
</script>

<MediaQuery query="(min-width: 640px)" let:matches>
	{#if matches || !Object.keys($currentProduct).length}
		<div class="container">
			<input on:input={searchProducts} class="input" placeholder="search" />
		</div>
	{/if}
</MediaQuery>

<style lang="postcss">
	.container {
		@apply h-12 ml-auto mr-auto flex justify-center items-center;
	}

	.input {
		@apply outline outline-1 w-4/5 sm:w-28 focus:outline-blue-600 p-1 text-sm;
	}
</style>
