<script>
	import { productsView, products, tags, filters } from '$lib/stores';
	import { normalize, filterProductsBy } from '$helpers';
	export let reset;
	let { selectedCat, selectedRating } = $filters;

	const stars = ['⭐ ⬆', '⭐⭐ ⬆', '⭐⭐⭐ ⬆', '⭐⭐⭐⭐ ⬆', '⭐⭐⭐⭐⭐ ⬆'];

	const filterProducts = (name, otherVal, { rating = '', tag = '', $tags = [] }) => {
		const filterArgs = (name) => (name === 'rating' ? { value: rating } : { value: tag, $tags });
		const otherFilterArgs = (name) =>
			name === 'rating' ? { value: otherVal } : { value: otherVal, $tags };
		const otherValName = name === 'rating' ? 'tag' : 'rating';

		const filterOne = filterProductsBy(name, $products, filterArgs(name));
		const filterBoth = filterProductsBy(otherValName, filterOne, otherFilterArgs(otherValName));

		console.log(filterOne, filterBoth);

		return otherVal ? filterBoth : filterOne;
	};

	const filter = ({ target: { name, value } }) => {
		if (Number(value) === 0) {
			reset();
			return;
		}
		switch (normalize(name)) {
			case 'rating':
				productsView.set(
					filterProducts(name, selectedCat, { rating: value, tag: selectedCat, $tags })
				);
				break;
			case 'tag':
				productsView.set(
					filterProducts(name, selectedRating, { rating: selectedRating, tag: value, $tags })
				);
				break;
		}
	};
</script>

<div class="container">
	<div class="filterBar">
		<div class="filterTitle">Filter</div>
		<button on:click={reset}> ✖️ </button>
	</div>

	<select
		on:change={filter}
		class={`p-1 pl-5  mr-12 w-full focus:outline-none ${$filters.selectedCat ? 'dither' : ''}`}
		name="tag"
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

<style lang="postcss">
	.container {
		@apply flex flex-col text-sm h-auto mb-4 mr-6 mt-4;
	}

	.filterBar {
		@apply pl-4 p-2 pr-2  flex justify-between;
	}

	.filterTitle {
		@apply font-bold;
	}
	select:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
