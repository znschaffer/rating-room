<script>
	import SortOption from './SortOption.svelte';
	import { productsView } from '$lib/stores';
	import { normalize, avgRating } from '$helpers';

	const sortOptions = ['Rating', 'Name', 'Created'];

	const sort = (name, current) => {
		switch (normalize(name)) {
			case 'rating':
				productsView.set(
					$productsView.sort((prev, curr) => {
						if (current) return avgRating(prev.rating) < avgRating(curr.rating) ? -1 : 1;
						else return avgRating(prev.rating) < avgRating(curr.rating) ? 1 : -1;
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
</script>

<div class="container">
	<div class="sortBar">
		<div class="font-bold">Sort</div>
	</div>
	{#each sortOptions as option}
		<SortOption {option} {sort} />
	{/each}
</div>

<style lang="postcss">
	.container {
		@apply flex flex-col text-sm h-auto mb-4 mr-6;
	}
	.sortBar {
		@apply pl-4 p-2 flex justify-between;
	}
</style>
