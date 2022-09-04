<script>
	import { urlFor } from '$lib/sanityClient';
	import { currentProduct } from '$lib/stores';
	import Rating from './Rating/Rating.svelte';
	import PrevNext from './PrevNext/PrevNext.svelte';
	import Tag from './Tag/Tag.svelte';
</script>

<div class="flex flex-col">
	<div class="flex m-16 gap-12 w-full">
		{#if $currentProduct.image}
			<img
				src={urlFor($currentProduct.image).url()}
				class="min-w-36 min-h-36 w-72 h-72 border-black border-2 p-3"
				alt={$currentProduct.name}
			/>
		{/if}
		<div class="productInfo">
			{#if $currentProduct.subname}
				<span class="subname">{$currentProduct.subname}</span>
			{/if}
			<a
				href={$currentProduct?.url}
				target="_blank"
				class={`font-bold text-2xl title ${$currentProduct.url ? 'text-sky-600' : ''}`}
				>{$currentProduct.name}</a
			>
			{#if $currentProduct.tags}
				<div class="tags">
					{#each $currentProduct.tags as tag (tag._ref)}
						<Tag {tag} />
					{/each}
				</div>
			{/if}
			{#if $currentProduct.description}
				<p class="description">{$currentProduct.description}</p>
			{/if}
			<p class="date">Created on: {new Date($currentProduct._createdAt)}</p>
		</div>
	</div>
	{#if $currentProduct.rating}
		<div class="ratings">
			{#each $currentProduct.rating as rating (rating._key)}
				<Rating {rating} />
			{/each}
		</div>
	{/if}
	<PrevNext on:toProduct />
</div>

<style lang="postcss">
	.productInfo {
		@apply flex flex-col gap-2;
	}
	.subname {
		@apply -mb-2 font-light text-sm;
	}
	.description {
		@apply leading-5;
	}
	.date {
		@apply text-xs w-2/3 mt-auto mb-4;
	}
	.tags {
		@apply flex gap-1 mb-1;
	}
	.ratings {
		@apply w-full;
	}
	img {
		image-rendering: pixelated;
	}
	.title:hover,
	img:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
