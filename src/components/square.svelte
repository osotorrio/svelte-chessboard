<script>
  export let id;
  export let height;
  export let color;
  export let piece;
  export let selected;

  $: if (selected) color = "selected";
</script>

<div on:click {id} style="height: {height}rem;" class="col {color} square">
  <svelte:component this={piece} {height} />
</div>

<style>
  .white {
    background-color: #f0d9b5;
    color: #b58863;
  }

  .black {
    background-color: #b58863;
    color: #f0d9b5;
  }

  .selected {
    background-color: #829769;
  }

  .square {
    padding: 0px;
    margin: 0px;
    cursor: pointer;
  }
</style>
