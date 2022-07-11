<script>
	import { productsView, products, tags } from '$lib/stores';
	import normalize from '$helpers/normalize';
	import getAvgRating from '$helpers/getAvgRating';
	export let selectedCat;
	export let selectedRating;
	export let reset;

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
				productsView.set(filterByRating($products, value));

				break;
			case 'category':
				productsView.set(filterByCat($products, value));
				break;
		}
	};

	const { container, filterBar, filterTitle, filterSort, option } = {
		container: 'flex flex-col text-sm h-auto mb-4 mr-6',
		filterBar: 'pl-8 p-2 pr-2  flex justify-between',
		filterTitle: 'font-bold',
		filterSort: 'p-1 pl-9  mr-12 hover:bg-blue-300 w-full',
		option: 'focus:outline-none appearance-none'
	};
</script>

<div class={container}>
	<div class={filterBar}>
		<div class={filterTitle}>Filter</div>
		<button on:click={reset}> ✖️ </button>
	</div>

	<select on:change={filter} class={filterSort} name="category" bind:value={selectedCat}>
		<option select="selected" value={0}>Category</option>
		{#each $tags as tag (tag.name)}
			<option class={option} value={tag.name}>{tag.name}</option>
		{/each}
	</select>
	<select on:change={filter} class={filterSort} name="rating" bind:value={selectedRating}>
		<option select="selected" value={0}>Rating</option>
		{#each stars as starValue, i (starValue)}
			<option class={option} value={i + 1}>{starValue}</option>
		{/each}
	</select>
</div>
