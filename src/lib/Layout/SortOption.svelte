<script>
	export let option;
	export let sort;
	let current = true;
</script>

<button
	class="sortOption"
	on:click={(e) => {
		sort(e.target.name, current);
		current = !current;
	}}
	name={option}
>
	<p class="noPointer">{option}</p>
	<p class="noPointer">{current ? '▲' : '▼'}</p>
</button>

<style lang="postcss">
	.sortOption {
		@apply p-1 pl-5 mr-12 w-full flex justify-between;
	}

	.noPointer {
		@apply pointer-events-none;
	}
	button:hover {
		background-image: url('dither.gif');
		background-repeat: repeat;
	}
</style>
