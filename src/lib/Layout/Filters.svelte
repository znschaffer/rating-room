<script>
	import { productsView, products, tags, filters } from '$lib/stores';
	import { normalize, filterByRating, filterByCat } from '$helpers';
	export let reset;
	let { selectedCat, selectedRating } = $filters;

	const stars = ['⭐ ⬆', '⭐⭐ ⬆', '⭐⭐⭐ ⬆', '⭐⭐⭐⭐ ⬆', '⭐⭐⭐⭐⭐ ⬆'];

	const filter = ({ target: { name, value } }) => {
		if (Number(value) === 0) {
			reset();

			return;
		}
		switch (normalize(name)) {
			case 'rating':
				if (selectedCat)
					productsView.set(filterByCat(filterByRating($products, value), selectedCat, $tags));
				else productsView.set(filterByRating($products, value));
				break;
			case 'category':
				if (selectedRating)
					productsView.set(filterByRating(filterByCat($products, value, $tags), selectedRating));
				else productsView.set(filterByCat($products, value, $tags));
				break;
		}
	};

	const { container, filterBar, filterTitle } = {
		container: 'flex flex-col text-sm h-auto mb-4 mr-6 mt-4',
		filterBar: 'pl-4 p-2 pr-2  flex justify-between',
		filterTitle: 'font-bold'
	};
</script>

<div class={container}>
	<div class={filterBar}>
		<div class={filterTitle}>Filter</div>
		<button on:click={reset}> ✖️ </button>
	</div>

	<select
		on:change={filter}
		class={`p-1 pl-5  mr-12 w-full focus:outline-none ${$filters.selectedCat ? 'dither' : ''}`}
		name="category"
		bind:value={$filters.selectedCat}
	>
		<option select="selected" value={0}>Category</option>
		{#each $tags as tag (tag.name)}
			<option value={tag.name}>{tag.name}</option>
		{/each}
	</select>

	<select
		on:change={filter}
		class={`p-1 pl-5  mr-12 w-full focus:outline-none ${$filters.selectedRating ? 'dither' : ''}`}
		name="rating"
		bind:value={$filters.selectedRating}
	>
		<option select="selected" value={0}>Rating</option>
		{#each stars as starValue, i (starValue)}
			<option value={i + 1}>{starValue}</option>
		{/each}
	</select>
</div>

<style>
	select:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
