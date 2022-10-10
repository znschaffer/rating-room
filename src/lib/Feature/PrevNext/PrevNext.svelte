<script lang="ts">
	import { currentProduct, productsView } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	$: foundIndex = $productsView.findIndex((prod) => prod._id === $currentProduct._id);
	$: PREV = $productsView[foundIndex - 1];
	$: NEXT = $productsView[foundIndex + 1];

	const dispatch = createEventDispatcher();

	const navigate = (e) => {
		let product;
		if (e.target.name === 'prev' && PREV) product = PREV;
		if (e.target.name === 'next' && NEXT) product = NEXT;
		dispatch('toProduct', {
			product,
			currentProduct
		});
	};

	const { container, btn } = {
		container: 'flex justify-between m-4 sm:m-16 sm:mt-2 sm:mb-6 h-auto sm:h-12 text-sm',
		btn: 'flex items-center justify-end'
	};
</script>

<div class={container}>
	{#if PREV}
		<button on:click={navigate} class={`${btn} pr-4`} name="prev"
			><svg focusable="false" width={50} height={50} viewBox="0 0 24 24">
				<path d="m14 7-5 5 5 5V7z" />
			</svg><span class="text-left">{PREV.name}</span></button
		>
	{:else}
		<div />
	{/if}

	{#if NEXT}
		<button on:click={navigate} class={`${btn} pl-4`} name="next"
			><span class="text-right">{NEXT.name}</span><svg
				focusable="false"
				width={50}
				height={50}
				viewBox="0 0 24 24"><path d="m10 17 5-5-5-5v10z" /></svg
			></button
		>
	{:else}
		<div />
	{/if}
</div>

<style>
	svg,
	path,
	span {
		pointer-events: none;
	}

	button:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
