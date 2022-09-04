<script>
	import { urlFor } from './sanityClient';
	import { currentProduct } from '$lib/stores';
	export let products;
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="container">
	{#each products as product}
		<button
			on:click={() => {
				dispatch('toProduct', {
					product,
					currentProduct
				});
			}}
		>
			{#if product.image}
				<img src={urlFor(product.image).width(150).url()} alt={product.name} />
			{/if}
		</button>
	{/each}
</div>

<style lang="postcss">
	.container {
		@apply flex flex-wrap mt-1 mb-1 justify-start;
	}
	img:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
