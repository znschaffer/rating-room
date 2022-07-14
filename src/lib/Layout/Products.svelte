<script>
	export let productsView;
	export let currentProduct;
	import { toProduct } from '$helpers';

	const { container, productStyle } = {
		container: 'pt-4',
		productList: 'flex flex-col items-start mt-10 text-sm',
		productStyle: 'w-full text-left'
	};
</script>

<div class={container}>
	{#each productsView as product}
		<button class={productStyle} on:click={() => toProduct(product, currentProduct)}>
			<p
				class={`pl-12 hover:bg-blue-300 ${
					$currentProduct && $currentProduct.name === product.name ? 'bg-blue-300' : ''
				} text-sm`}
			>
				{product.name}
			</p>
		</button>
	{/each}
</div>
