<script>
	import { productsView, currentProduct } from '$lib/stores';

	const { options,option, productList, productStyle, productTitle } = {
		options: 'flex gap-4 w-full text-xs',
    option: 'hover:bg-blue-300 pl-2 w-1/2',
    productList: 'flex flex-col items-start mt-10 text-sm',
    productStyle: 'hover:bg-blue-300 w-full text-left',
    productTitle: 'pl-2 '
	};
</script>

<div class={options}>
	<div class={option}>Filter</div>
	<div class={option}>Sort</div>
</div>
<div class={productList}>
{#each $productsView as product}
		<a 
      class={productStyle}
      on:click={currentProduct.set(product)} 
      href="/product">
			<p class={productTitle}>{product.name}</p>
		</a>
{/each}
</div>