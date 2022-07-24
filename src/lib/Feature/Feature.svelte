<script>
	import { urlFor } from '$lib/sanityClient';
	import { currentProduct } from '$lib/stores';
	import Rating from './Rating/Rating.svelte';
	import PrevNext from './PrevNext/PrevNext.svelte';
	import Tag from './Tag/Tag.svelte';

	const {
		container,
		imageView,
		subname,
		description,
		productInfo,
		date,
		tags,
		img,
		ratings
	} = {
		container: 'flex flex-col',
		imageView: 'flex m-16 gap-12 w-100',
		productInfo: 'flex flex-col gap-2',
		subname: '-mb-2 font-light text-sm',
		description: 'leading-5',
		date: 'text-xs w-2/3 mt-auto mb-4',
		tags: 'flex gap-1 mb-1',
		img: 'p-8 border w-72 h-72 min-w-36 min-h-36  border-black border-2 p-3',
		ratings: 'w-100'
	};
</script>

<div class={container}>
	<div class={imageView}>
		{#if $currentProduct.image}
		<img src={urlFor($currentProduct.image).url()} class={img} alt={$currentProduct.name} />
		{/if}
		<div class={productInfo}>
			{#if $currentProduct.subname}
				<span class={subname}>{$currentProduct.subname}</span>
			{/if}
			<a href={$currentProduct?.url} target="_blank" class={`font-bold text-2xl title ${$currentProduct.url? 'text-sky-600':''}`}>{$currentProduct.name}</a>
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
	{#if $currentProduct.rating}
		<div class={ratings}>
			{#each $currentProduct.rating as rating (rating._key)}
				<Rating {rating} />
			{/each}
		</div>
	{/if}
	<PrevNext />
</div>

<style>
	img {
		image-rendering: pixelated;
	}
	.title:hover, img:hover{
		background-image: url('dither.gif');
  background-repeat: repeat;
	}
</style>
