<script>
  export let tag;
  import { tags } from '$lib/stores';

  const tagName = ($tags.find((dirTag) => dirTag._id === tag._ref)).name

  const { container } = {
    container: 'text-sm flex rounded-md pl-2 pr-2 pt-1 pb-1 bg-gray-200'
  }

</script>

<p class={container}>{tagName}</p>