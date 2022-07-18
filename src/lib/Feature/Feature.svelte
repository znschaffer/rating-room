<script>
	import { urlFor } from '$lib/sanityClient';
	import { currentProduct } from '$lib/stores';
	import Tag from './Tag/Tag.svelte';
	console.log($currentProduct);

	const { container, name, description, productInfo, date, tags, img } = {
		container: 'flex m-16 gap-12',
		productInfo: 'flex flex-col gap-2',
		name: 'font-bold text-2xl',
		description: '',
		date: 'text-xs w-2/3 mt-auto mb-4',
		tags: 'flex gap-1',
		img: 'p-8 border  border-black border-2 p-3'
	};
</script>

<div class={container}>
	{#if $currentProduct.image}
		<img
			src={urlFor($currentProduct.image).url()}
			class={img}
			width={300}
			alt={$currentProduct.name}
		/>
	{/if}
	<div class={productInfo}>
		<p class={name}>{$currentProduct.name}</p>
		{#if $currentProduct.tags}
			<div class={tags}>
				{#each $currentProduct.tags as tag (tag._ref)}
					<Tag {tag} />
				{/each}
			</div>
		{/if}
		{#if $currentProduct.description}
			<p class={description}>{$currentProduct.description}</p>
		{/if}
		<p class={date}>Created on: {new Date($currentProduct._createdAt)}</p>
	</div>
</div>

<style>
	img {
		image-rendering: pixelated;
	}
</style>