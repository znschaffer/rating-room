<script>
	import { productsView, products, tags } from '$lib/stores';
	import {normalize, getAvgRating } from '$helpers';
	export let filters;
	export let reset;
	let { selectedCat, selectedRating } = filters;

	const stars = ['⭐ ⬆', '⭐⭐ ⬆', '⭐⭐⭐ ⬆', '⭐⭐⭐⭐ ⬆', '⭐⭐⭐⭐⭐ ⬆'];

	const filterByCat = (products, value) =>
		products.filter((product) => {
			if (product.tags) {
				const selectedTagId = $tags.find((tag) => tag.name === value)._id;
				const productTags = product.tags.map((tag) => tag._ref);
				if (productTags.includes(selectedTagId)) return true;
			} else return false;
		});

	const filterByRating = (products, value) =>
		products.filter((product) => product.rating && getAvgRating(product.rating) >= Number(value));

	const filter = ({ target: { name, value } }) => {
		if (Number(value) === 0) {
			reset();
			return;
		}
		switch (normalize(name)) {
			case 'rating':
				if (selectedCat)
					productsView.set(filterByCat(filterByRating($products, value), selectedCat));
				else productsView.set(filterByRating($products, value));
				break;
			case 'category':
				if (selectedRating)
					productsView.set(filterByRating(filterByCat($products, value), selectedRating));
				else productsView.set(filterByCat($products, value));
				break;
		}
	};

	const { container, filterBar, filterTitle, filterSort } = {
		container: 'flex flex-col text-sm h-auto mb-4 mr-6',
		filterBar: 'pl-8 p-2 pr-2  flex justify-between',
		filterTitle: 'font-bold',
		filterSort: 'p-1 pl-9  mr-12 hover:bg-blue-300 w-full focus:outline-none'
	};
</script>

<div class={container}>
	<div class={filterBar}>
		<div class={filterTitle}>Filter</div>
		<button on:click={reset}> ✖️ </button>
	</div>

	<select on:change={filter} class={filterSort} name="category" bind:value={filters.selectedCat}>
		<option select="selected" value={0}>Category</option>
		{#each $tags as tag (tag.name)}
			<option value={tag.name}>{tag.name}</option>
		{/each}
	</select>

	<select on:change={filter} class={filterSort} name="rating" bind:value={filters.selectedRating}>
		<option select="selected" value={0}>Rating</option>
		{#each stars as starValue, i (starValue)}
			<option value={i + 1}>{starValue}</option>
		{/each}
	</select>
</div>
