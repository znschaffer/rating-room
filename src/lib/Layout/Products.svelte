<script>
	import { productsView, currentProduct } from '$lib/stores';

	const { container, productStyle, productTitle } = {
    productList: 'flex flex-col items-start mt-10 text-sm',
    productStyle: ' w-full text-left',
    productTitle: 'pl-2 hover:bg-blue-300 '
	};
</script>


<div class={container}>
{#each $productsView as product}
		<a 
      class={productStyle}
      on:click={currentProduct.set(product)} 
      href="/product">
			<p class={productTitle}>{product.name}</p>
		</a>
{/each}
</div>