<script>
  export let id;
  export let height;
  export let color;
  export let piece;
  export let selected;
</script>

<div
  on:click
  {id}
  style="height: {height}rem;"
  class="col {color} square"
  class:selected
>
  <svelte:component this={piece} {height} />
</div>

<style>
  .white {
    background-color: #f0d9b5; /*#F6D8B5*/
    color: #b58863;
  }

  .black {
    background-color: #b58863; /*#F6D8B5*/
    color: #f0d9b5;
  }

  .selected {
    background-color: #ccd178;
  }

  .square {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
</style>
