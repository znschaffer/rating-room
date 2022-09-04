<script>
	export let productsView;
	export let currentProduct;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="container">
	{#each productsView as product}
		<button
			class="productStyle"
			on:click={() => {
				dispatch('toProduct', {
					product,
					currentProduct
				});
			}}
		>
			<p
				class={`pl-4 hover:bg-gray-200 ${
					$currentProduct && $currentProduct.name === product.name ? 'dither' : ''
				} text-sm`}
			>
				{product.name}
			</p>
		</button>
	{/each}
</div>

<style lang="postcss">
	.container {
		@apply pt-4;
	}

	.productStyle {
		@apply w-full text-left snap-start snap-always;
	}
</style>
