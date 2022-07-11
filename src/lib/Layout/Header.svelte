<script>
  export let reset;
  const {title} = {
    title: 'hover:bg-blue-300 text-lg font-bold m-12 ml-0 pl-12',
  }
</script>

<a href="/" class={title} on:click={reset} >
Rating Room
</a>