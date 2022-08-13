<script>
	import SortOption from './SortOption.svelte';
	import { productsView } from '$lib/stores';
	import {normalize, getAvgRating } from '$helpers';

	const sortOptions = ['Rating', 'Name', 'Created'];

	const sort = (name, current) => {
		switch (normalize(name)) {
			case 'rating':
				productsView.set(
					$productsView.sort((prev, curr) => {
						if (current) return getAvgRating(prev.rating) < getAvgRating(curr.rating) ? -1 : 1;
						else return getAvgRating(prev.rating) < getAvgRating(curr.rating) ? 1 : -1;
					})
				);
				break;
			case 'name':
				productsView.set(
					$productsView.sort((prev, curr) => {
						if (current) return prev.name < curr.name ? -1 : 1;
						else return prev.name < curr.name ? 1 : -1;
					})
				);
				break;
			case 'created':
				productsView.set(
					$productsView.sort((prev, curr) => {
						if (current) return new Date(prev._createdAt) < new Date(curr._createdAt) ? -1 : 1;
						else return new Date(prev._createdAt) < new Date(curr._createdAt) ? 1 : -1;
					})
				);
				break;
		}
	};

	const { container, sortBar, sortTitle } = {
		container: 'flex flex-col text-sm h-auto mb-4 mr-6',
		sortBar: 'pl-4 p-2 flex justify-between',
		sortTitle: 'font-bold'
	};
</script>

<div class={container}>
	<div class={sortBar}>
		<div class={sortTitle}>Sort</div>
	</div>
	{#each sortOptions as option}
		<SortOption {option} {sort} />
	{/each}
</div>
