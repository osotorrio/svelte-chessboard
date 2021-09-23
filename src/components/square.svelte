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
    background-color: #f6d8b5;
    color: #bf8661;
  }

  .black {
    background-color: #bf8661;
    color: #f6d8b5;
  }

  .selected {
    background-color: #ccd178; /*First: #7C986B. Second: ccd178*/
  }

  .square {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
</style>
