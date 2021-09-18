<script>
  import { chessboard, findSquareById } from "../modules/chessboard";
  import Square from "./square.svelte";

  let x;
  $: height = x * 0.006;
  $: boardWidth = height * 8 + 0.3;
  let board = chessboard;

  function handleClick(e) {
    const id = e.currentTarget.id;

    const source = findSquareById(id);
    const target = chessboard[4][5];

    target.piece = source.piece;
    source.piece = null;

    board = chessboard.map((row) => row);
  }
</script>

<svelte:window bind:innerWidth={x} />

<div class="container-fluid">
  <div class="row board" style="--board-width: {boardWidth}rem">
    <div class="col">
      {#each board as row}
        <div class="row">
          {#each row as { id, color, piece }}
            <Square {id} {color} {piece} {height} on:click={handleClick} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .board {
    border: 0.15rem solid;
    width: var(--board-width);
  }
</style>
