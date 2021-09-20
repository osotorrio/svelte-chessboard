<script>
  import BlackBishop from "../components/pieces/black-bishop.svelte";
  import BlackKing from "../components/pieces/black-king.svelte";
  import BlackKnight from "../components/pieces/black-knight.svelte";
  import BlackPawn from "../components/pieces/black-pawn.svelte";
  import BlackQueen from "../components/pieces/black-queen.svelte";
  import BlackRock from "../components/pieces/black-rock.svelte";
  import WhiteBishop from "../components/pieces/white-bishop.svelte";
  import WhiteKing from "../components/pieces/white-king.svelte";
  import WhiteKnight from "../components/pieces/white-knight.svelte";
  import WhitePawn from "../components/pieces/White-pawn.svelte";
  import WhiteQueen from "../components/pieces/white-queen.svelte";
  import WhiteRock from "../components/pieces/white-rock.svelte";
  import Square from "../components/square.svelte";

  let x;
  $: height = x * 0.006;
  $: boardWidth = height * 8 + 0.3;

  const indexes = {
    a8: 0,
    b8: 1,
    c8: 2,
    d8: 3,
    e8: 4,
    f8: 5,
    g8: 6,
    h8: 7,
    a7: 8,
    b7: 9,
    c7: 10,
    d7: 11,
    e7: 12,
    f7: 13,
    g7: 14,
    h7: 15,
    a6: 16,
    b6: 17,
    c6: 18,
    d6: 19,
    e6: 20,
    f6: 21,
    g6: 22,
    h6: 23,
    a5: 24,
    b5: 25,
    c5: 26,
    d5: 27,
    e5: 28,
    f5: 29,
    g5: 30,
    h5: 31,
    a4: 32,
    b4: 33,
    c4: 34,
    d4: 35,
    e4: 36,
    f4: 37,
    g4: 38,
    h4: 39,
    a3: 40,
    b3: 41,
    c3: 42,
    d3: 43,
    e3: 44,
    f3: 45,
    g3: 46,
    h3: 47,
    a2: 48,
    b2: 49,
    c2: 50,
    d2: 51,
    e2: 52,
    f2: 53,
    g2: 54,
    h2: 55,
    a1: 56,
    b1: 57,
    c1: 58,
    d1: 59,
    e1: 60,
    f1: 61,
    g1: 62,
    h1: 63,
  };

  let chessboard = [
    { id: "a8", color: "black", piece: BlackRock, selected: false },
    { id: "b8", color: "white", piece: BlackKnight, selected: false },
    { id: "c8", color: "black", piece: BlackBishop, selected: false },
    { id: "d8", color: "white", piece: BlackQueen, selected: false },
    { id: "e8", color: "black", piece: BlackKing, selected: false },
    { id: "f8", color: "white", piece: BlackBishop, selected: false },
    { id: "g8", color: "black", piece: BlackKnight, selected: false },
    { id: "h8", color: "white", piece: BlackRock, selected: false },
    { id: "a7", color: "white", piece: BlackPawn, selected: false },
    { id: "b7", color: "black", piece: BlackPawn, selected: false },
    { id: "c7", color: "white", piece: BlackPawn, selected: false },
    { id: "d7", color: "black", piece: BlackPawn, selected: false },
    { id: "e7", color: "white", piece: BlackPawn, selected: false },
    { id: "f7", color: "black", piece: BlackPawn, selected: false },
    { id: "g7", color: "white", piece: BlackPawn, selected: false },
    { id: "h7", color: "black", piece: BlackPawn, selected: false },
    { id: "a6", color: "black", piece: null, selected: false },
    { id: "b6", color: "white", piece: null, selected: false },
    { id: "c6", color: "black", piece: null, selected: false },
    { id: "d6", color: "white", piece: null, selected: false },
    { id: "e6", color: "black", piece: null, selected: false },
    { id: "f6", color: "white", piece: null, selected: false },
    { id: "g6", color: "black", piece: null, selected: false },
    { id: "h6", color: "white", piece: null, selected: false },
    { id: "a5", color: "white", piece: null, selected: false },
    { id: "b5", color: "black", piece: null, selected: false },
    { id: "c5", color: "white", piece: null, selected: false },
    { id: "d5", color: "black", piece: null, selected: false },
    { id: "e5", color: "white", piece: null, selected: false },
    { id: "f5", color: "black", piece: null, selected: false },
    { id: "g5", color: "white", piece: null, selected: false },
    { id: "h5", color: "black", piece: null, selected: false },
    { id: "a4", color: "black", piece: null, selected: false },
    { id: "b4", color: "white", piece: null, selected: false },
    { id: "c4", color: "black", piece: null, selected: false },
    { id: "d4", color: "white", piece: null, selected: false },
    { id: "e4", color: "black", piece: null, selected: false },
    { id: "f4", color: "white", piece: null, selected: false },
    { id: "g4", color: "black", piece: null, selected: false },
    { id: "h4", color: "white", piece: null, selected: false },
    { id: "a3", color: "white", piece: null, selected: false },
    { id: "b3", color: "black", piece: null, selected: false },
    { id: "c3", color: "white", piece: null, selected: false },
    { id: "d3", color: "black", piece: null, selected: false },
    { id: "e3", color: "white", piece: null, selected: false },
    { id: "f3", color: "black", piece: null, selected: false },
    { id: "g3", color: "white", piece: null, selected: false },
    { id: "h3", color: "black", piece: null, selected: false },
    { id: "a2", color: "black", piece: WhitePawn, selected: false },
    { id: "b2", color: "white", piece: WhitePawn, selected: false },
    { id: "c2", color: "black", piece: WhitePawn, selected: false },
    { id: "d2", color: "white", piece: WhitePawn, selected: false },
    { id: "e2", color: "black", piece: WhitePawn, selected: false },
    { id: "f2", color: "white", piece: WhitePawn, selected: false },
    { id: "g2", color: "black", piece: WhitePawn, selected: false },
    { id: "h2", color: "white", piece: WhitePawn, selected: false },
    { id: "a1", color: "white", piece: WhiteRock, selected: false },
    { id: "b1", color: "black", piece: WhiteKnight, selected: false },
    { id: "c1", color: "white", piece: WhiteBishop, selected: false },
    { id: "d1", color: "black", piece: WhiteQueen, selected: false },
    { id: "e1", color: "white", piece: WhiteKing, selected: false },
    { id: "f1", color: "black", piece: WhiteBishop, selected: false },
    { id: "g1", color: "white", piece: WhiteKnight, selected: false },
    { id: "h1", color: "black", piece: WhiteRock, selected: false },
  ];

  function handleClick(e) {
    const id = e.currentTarget.id;
    const square = chessboard[indexes[id]];
    square.selected = !square.selected;
    chessboard = [...chessboard];
    //chessboard = chessboard.map((square) => square);
  }
</script>

<svelte:window bind:innerWidth={x} />

<div class="container-fluid">
  <div class="row board" style="--board-width: {boardWidth}rem">
    <div class="col">
      {#each chessboard as row, i}
        {#if i % 8 === 0}
          <div class="row">
            {#each chessboard as { id, color, piece, selected }, j}
              {#if j > i - 1 && j < i + 8}
                <Square
                  {id}
                  {color}
                  {piece}
                  {height}
                  {selected}
                  on:click={handleClick}
                />
              {/if}
            {/each}
          </div>
        {/if}
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
