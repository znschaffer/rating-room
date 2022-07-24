<script>
	export let productsView;
	export let currentProduct;
	import { toProduct } from '$helpers';

	const { container, productStyle } = {
		container: 'pt-4',
		productList: 'flex flex-col items-start mt-10 text-sm',
		productStyle: 'w-full text-left snap-start snap-always'
	};
</script>

<div class={container}>
	{#each productsView as product}
		<button class={productStyle} on:click={() => toProduct(product, currentProduct)}>
			<p
				class={`pl-10 hover:bg-gray-200 ${
					$currentProduct && $currentProduct.name === product.name ? 'dither' : ''
				} text-sm`}
			>
				{product.name}
			</p>
		</button>
	{/each}
</div>

<style>
		@keyframes shake {
  from {background-image:url('dither.png')}
  to {background-image:url('dither2.png')}
}
	.dither {
		background-blend-mode: color dodge;
		animation: shake 0.4s infinite;
	}
</style>
