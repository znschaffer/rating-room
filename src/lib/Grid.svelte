<script>
	import { urlFor } from './sanityClient';
	import { currentProduct } from '$lib/stores.js';
	import { toProduct } from '$helpers';
	export let products;

	const {container} = {
		container: 'flex flex-wrap m-12 justify-start',
	}
</script>


<div class={container}>
	{#each products as product}
			<button on:click={() => toProduct(product, currentProduct)} >
				{#if product.image}
					<img src={urlFor(product.image).width(150).url()} alt={product.name} />
				{/if}
			</button>
	{/each}
</div>
