<script>
	export let productsView;
	export let currentProduct;
	import { parseName } from '$helpers/parse';

	const { container, productStyle, productTitle } = {
		container: 'pt-4',
		productList: 'flex flex-col items-start mt-10 text-sm',
		productStyle: 'w-full text-left',
		productTitle: 'pl-12 hover:bg-blue-300 text-sm'
	};
</script>

<div class={container}>
	{#each productsView as product}
		<a class={productStyle} on:click={currentProduct.set(product)} href={parseName(product.name)}>
			<p
				class={`pl-12 hover:bg-blue-300 ${
					$currentProduct && $currentProduct.name === product.name ? 'bg-blue-300' : ''
				} text-sm`}
			>
				{product.name}
			</p>
		</a>
	{/each}
</div>
