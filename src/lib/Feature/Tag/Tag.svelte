<script>
  export let tag;
  import { tags, currentProduct, productsView, products, filters } from '$lib/stores';
  import { filterByCat, resetParams} from '$helpers';

  const tagName = ($tags.find((dirTag) => dirTag._id === tag._ref)).name

  const filter = () => {
    const updatedByCat = filterByCat($products, tagName, $tags)
    currentProduct.set({});
		productsView.set(updatedByCat)
    filters.set({...$filters, selectedCat: tagName})
    resetParams()
	}

  const { container } = {
    container: 'text-sm flex rounded-md pl-2 pr-2 pt-1 pb-1 bg-gray-200'
  }

</script>

<button class={container} on:click={filter}>{tagName}</button>

<style>
	@keyframes shake {
  from {background-image:url('dither.png')}
  to {background-image:url('dither2.png')}
}
	button:hover {
		background-blend-mode: color dodge;
		animation: shake 0.4s infinite;
  }
</style>
