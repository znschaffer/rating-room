<script>
	import { currentProduct, products } from '$lib/stores'; 
  import { toProduct } from '$helpers';

  $: foundIndex =  $products.findIndex((prod) => prod._id === $currentProduct._id)
  $: PREV = $products[foundIndex-1];
  $: NEXT = $products[foundIndex+1];

  const navigate = (e) => {
    if (e.target.name === 'prev' && PREV) {
      toProduct(PREV, currentProduct)
    } 
    if (e.target.name === 'next' && NEXT){
      toProduct(NEXT, currentProduct)
    }
  }

	const { container, btn } = {
		container: 'flex justify-between h-12  ml-16 mr-16',
    btn: 'flex items-center gap-4'
	};
</script>

<div class={container}>
	{#if PREV }
  <button on:click={navigate} class={btn} name={'prev'}
		><svg focusable="false" width={50} height={50} viewBox="0 0 24 24">
			<path d="m14 7-5 5 5 5V7z" />
		</svg>{PREV.name}</button
	>
  {:else}
  <div></div>
  {/if}

  {#if NEXT}
	<button on:click={navigate} class={btn} name={'next'}
  	>{NEXT.name}<svg focusable="false" width={50} height={50} viewBox="0 0 24 24"
			><path d="m10 17 5-5-5-5v10z" /></svg
		></button
	>
  {:else}
  <div></div>
  {/if}
</div>

<style>
  svg,path {
    pointer-events: none;
  }
</style>