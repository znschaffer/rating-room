<script>
	let sortVal = 0;
  const sortOptions = ['Rating', 'Name', 'Created']

  const sort = (name) =>{
    console.log(this)
  }

	const { container, sortBar, sortTitle, sortOption } = {
		container: 'pl-2 flex flex-col gap-4 w-full text-xs mb-6',
		sortBar: 'flex justify-between',
		sortTitle: 'font-bold',
    sortOption: 'flex justify-between pl-1 pr-1'
	};
</script>

<div class={container}>
	<div class={sortBar}>
		<div class={sortTitle}>Sort</div>
		<button>✖️ </button>
	</div>
  {#each sortOptions as option}
    <button class={sortOption} on:click={sort} name={option} >
      <p>{option} </p>
      <!-- <p>▲</p> -->
    </button>
  {/each}
</div>
