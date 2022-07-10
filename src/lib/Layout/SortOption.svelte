
<script>
  export let option;
  export let sort;
  let current=true;


  const { sortOption, noPointer } = {
    sortOption: `flex justify-between pl-1 pr-1 z-2 ${current? 'bg-transparent':'bg-blue-300'}`,
    noPointer:'pointer-events-none'
  }
</script>

<button class={sortOption} on:click={(e) => {sort(e.target.name, current); current=!current; }} name={option}  >
  <p class={noPointer}>{option} </p>
  <p class={noPointer}>{current?'▲':'▼'}</p>
</button>