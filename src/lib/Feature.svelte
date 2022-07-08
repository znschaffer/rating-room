<script>
	import { urlFor } from './sanityClient';
	export let product;
	export let nextProduct;
	export let prevProduct;
</script>

<div class="content">
	<button on:click={prevProduct}>prev</button>
	<button on:click={nextProduct}>next</button>
	<p>{product.name}</p>
	<img src={urlFor(product.image).url()} alt={product.name} />
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
