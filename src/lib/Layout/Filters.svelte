<script>
	import { productsView, products, tags } from '$lib/stores';
	import normalize from '$helpers/normalize';
	import getAvgRating from '$helpers/getAvgRating';
	let selectedCat;
	let selectedRating;

	const stars = ['⭐ ⬆', '⭐⭐ ⬆', '⭐⭐⭐ ⬆', '⭐⭐⭐⭐ ⬆', '⭐⭐⭐⭐⭐ ⬆'];

	const reset = () => {
		productsView.set($products);
		selectedCat = 0;
		selectedRating = 0;
	};

	const filter = ({ target: { name, value } }) => {
		switch (normalize(name)) {
			case 'rating':
				if (!Number(value)) {
					reset();
					return;
				}
				productsView.set(
					$products.filter(
						(product) => product.rating && getAvgRating(product.rating) >= Number(value)
					)
				);
				break;
			case 'category':
				if (Number(value) === 0) {
					reset();
					return;
				}
				productsView.set(
					$products.filter((product) => {
						if (product.tags) {
							const selectedTagId = $tags.find((tag) => tag.name === value)._id;
							const productTags = product.tags.map((tag) => tag._ref);
							if (productTags.includes(selectedTagId)) return true;
						} else return false;
					})
				);
				break;
		}
	};

	const { container, filterBar, filterTitle, filterStyle, option } = {
		container: 'pl-2 flex flex-col gap-4 w-full text-xs mb-6',
		filterBar: 'flex justify-between',
		filterTitle: 'font-bold',
		filterSort: 'hover:bg-blue-300 w-full',
		option: 'focus:outline-none appearance-none'
	};
</script>

<div class={container}>
	<div class={filterBar}>
		<div class={filterTitle}>Filter</div>
		<button on:click={reset}> ✖️ </button>
	</div>

	<select on:change={filter} class={filterStyle} name="category" bind:value={selectedCat}>
		<option select="selected" value={0}>Category</option>
		{#each $tags as tag}
			<option class={option} value={tag.name}>{tag.name}</option>
		{/each}
	</select>
	<select on:change={filter} class={filterStyle} name="rating" bind:value={selectedRating}>
		<option select="selected" value={0}>Rating</option>
		{#each stars as starValue, i}
			<option class={option} value={i + 1}>{starValue}</option>
		{/each}
	</select>
</div>
