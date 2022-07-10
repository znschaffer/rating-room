<script>
	import { urlFor } from './sanityClient';
	import { currentProduct } from '$lib/stores.js';
	import { parseName } from '$helpers/parse.js';
	export let products;
</script>

<div class="content">
	{#each products as product}
		<li class="product">
			<a on:click={currentProduct.set(product)} href={parseName(product.name)}>
				{#if product.image}
					<img src={urlFor(product.image).width(125).height(125).url()} alt={product.name} />
				{/if}
			</a>
		</li>
	{/each}
</div>

<style>
	.content {
		width: calc(100% - 160px);
		margin-left: 160px;
		float: left;
		margin-top: 48px;
		padding: 0 32px;
	}
	.product {
		display: inline;
		float: left;
		width: 125px;
		height: 125px;
		padding: 0px;
	}
</style>
