<script>
	import SortOption from './SortOption.svelte';
	import { productsView } from '$lib/stores';
	import normalize from '$helpers/normalize';
	import getAvgRating from '$helpers/getAvgRating';

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
        console.log($productsView)
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
		container: 'pl-2 flex flex-col gap-4 w-full text-xs mb-6',
		sortBar: 'flex justify-between',
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
