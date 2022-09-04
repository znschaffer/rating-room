<script>
	export let reset;
</script>

<a href="/" class="title" on:click={reset}> Rating Room </a>

<style lang="postcss">
	.title {
		@apply font-bold p-4 pr-0 snap-start sticky top-0 bg-white h-12 shadow-sm shadow-white;
	}
	a:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
