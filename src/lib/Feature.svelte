<script>
	import { urlFor } from '$lib/sanityClient';
	import { currentProduct } from '$lib/stores';
</script>

<div class="content">
	<p>{$currentProduct.name}</p>
	{#if $currentProduct.image}
		<img src={urlFor($currentProduct.image).url()} alt={$currentProduct.name} />
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
