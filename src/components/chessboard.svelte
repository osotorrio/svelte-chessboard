<script>
  import { chessboard, findSquareById } from "../modules/chessboard";
  import {
    hasSelectedTwoSquares,
    registerSelectedSquare,
    tryToMakeMove,
  } from "../modules/chessengine";
  import Square from "./square.svelte";

  let x;
  $: height = x * 0.006;
  $: boardWidth = height * 8 + 0.3;
  let board = chessboard;

  function handleClick(e) {
    const square = findSquareById(e.currentTarget.id);
    registerSelectedSquare(square);

    if (hasSelectedTwoSquares()) {
      const wasMoved = tryToMakeMove();
      if (wasMoved) board = chessboard.map((row) => row);
    }
  }
</script>

<svelte:window bind:innerWidth={x} />

<div class="container-fluid">
  <div class="row board" style="--board-width: {boardWidth}rem">
    <div class="col">
      {#each board as row}
        <div class="row">
          {#each row as { id, color, piece, selected }}
            <Square
              {id}
              {color}
              {piece}
              {height}
              {selected}
              on:click={handleClick}
            />
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
