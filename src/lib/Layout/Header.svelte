<script>
	export let reset;
	import MediaQuery from 'svelte-media-query';
</script>

<MediaQuery query="(min-width: 640px)" let:matches>
	<a href="/" class="title" on:click={reset} class:mobile={!matches}> Rating Room </a>
</MediaQuery>

<style lang="postcss">
	.title {
		@apply font-bold p-4 pr-0 snap-start sticky top-0 bg-white h-12 shadow-sm shadow-white;
	}

	.mobile {
		@apply w-full text-center mx-auto;
	}
	a:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
