<script>
	import { currentProduct, productsView } from '$lib/stores';
	import { toProduct } from '$helpers';

	$: foundIndex = $productsView.findIndex((prod) => prod._id === $currentProduct._id);
	$: PREV = $productsView[foundIndex - 1];
	$: NEXT = $productsView[foundIndex + 1];

	const navigate = (e) => {
		if (e.target.name === 'prev' && PREV) {
			toProduct(PREV, currentProduct);
		}
		if (e.target.name === 'next' && NEXT) {
			toProduct(NEXT, currentProduct);
		}
	};

	const { container, btn } = {
		container: 'flex justify-between m-16 mt-2 mb-6 h-12  ',
		btn: 'flex items-center gap-4'
	};
</script>

<div class={container}>
	{#if PREV}
		<button on:click={navigate} class={btn} name={'prev'}
			><svg focusable="false" width={50} height={50} viewBox="0 0 24 24">
				<path d="m14 7-5 5 5 5V7z" />
			</svg><span class="text-left">{PREV.name}</span></button
		>
	{:else}
		<div />
	{/if}

	{#if NEXT}
		<button on:click={navigate} class={btn} name={'next'}
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
</style>
