<script>
	import { urlFor } from './sanityClient';
	export let product;
</script>

<div class="content">
	<p>{product.name}</p>
	{#if product.image}
		<img src={urlFor(product.image).url()} alt={product.name} />
	{/if}
</div>

<style>
	.content {
		width: calc(100% - 160px);
		margin-left: 160px;
		float: left;
		margin-top: 48px;
		padding: 0 32px;
	}
</style>
