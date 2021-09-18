import BlackKnight from "../components/pieces/black-bishop.svelte";
import BlackKing from "../components/pieces/black-king.svelte";
import BlackBishop from "../components/pieces/black-knight.svelte";
import BlackPawn from "../components/pieces/black-pawn.svelte";
import BlackQueen from "../components/pieces/black-queen.svelte";
import BlackRock from "../components/pieces/black-rock.svelte";
import WhiteKnight from "../components/pieces/white-bishop.svelte";
import WhiteKing from "../components/pieces/white-king.svelte";
import WhiteBishop from "../components/pieces/white-knight.svelte";
import WhitePawn from "../components/pieces/White-pawn.svelte";
import WhiteQueen from "../components/pieces/white-queen.svelte";
import WhiteRock from "../components/pieces/white-rock.svelte";

const rows = '87654321';
const columns = "abcdefgh";

export const findSquareById = id => {
    const column = columns.indexOf(id[0]);
    const row = rows.indexOf(id[1]);
    return chessboard[row][column];
};

export const chessboard = [
    [
        {id: 'a8', color: 'black', piece: BlackRock, selected: false}, 
        {id: 'b8', color: 'white', piece: BlackKnight, selected: false},
        {id: 'c8', color: 'black', piece: BlackBishop, selected: false},
        {id: 'd8', color: 'white', piece: BlackQueen, selected: false},
        {id: 'e8', color: 'black', piece: BlackKing, selected: false},
        {id: 'f8', color: 'white', piece: BlackBishop, selected: false},
        {id: 'g8', color: 'black', piece: BlackKnight, selected: false},
        {id: 'h8', color: 'white', piece: BlackRock, selected: false}
    ],
    [
        {id: 'a7', color: 'white', piece: BlackPawn, selected: false}, 
        {id: 'b7', color: 'black', piece: BlackPawn, selected: false},
        {id: 'c7', color: 'white', piece: BlackPawn, selected: false},
        {id: 'd7', color: 'black', piece: BlackPawn, selected: false},
        {id: 'e7', color: 'white', piece: BlackPawn, selected: false},
        {id: 'f7', color: 'black', piece: BlackPawn, selected: false},
        {id: 'g7', color: 'white', piece: BlackPawn, selected: false},
        {id: 'h7', color: 'black', piece: BlackPawn, selected: false}
    ],
    [
        {id: 'a6', color: 'black', piece: null, selected: false}, 
        {id: 'b6', color: 'white', piece: null, selected: false},
        {id: 'c6', color: 'black', piece: null, selected: false},
        {id: 'd6', color: 'white', piece: null, selected: false},
        {id: 'e6', color: 'black', piece: null, selected: false},
        {id: 'f6', color: 'white', piece: null, selected: false},
        {id: 'g6', color: 'black', piece: null, selected: false},
        {id: 'h6', color: 'white', piece: null, selected: false}
    ],
    [
        {id: 'a5', color: 'white', piece: null, selected: false}, 
        {id: 'b5', color: 'black', piece: null, selected: false},
        {id: 'c5', color: 'white', piece: null, selected: false},
        {id: 'd5', color: 'black', piece: null, selected: false},
        {id: 'e5', color: 'white', piece: null, selected: false},
        {id: 'f5', color: 'black', piece: null, selected: false},
        {id: 'g5', color: 'white', piece: null, selected: false},
        {id: 'h5', color: 'black', piece: null, selected: false}
    ],
    [
        {id: 'a4', color: 'black', piece: null, selected: false}, 
        {id: 'b4', color: 'white', piece: null, selected: false},
        {id: 'c4', color: 'black', piece: null, selected: false},
        {id: 'd4', color: 'white', piece: null, selected: false},
        {id: 'e4', color: 'black', piece: null, selected: false},
        {id: 'f4', color: 'white', piece: null, selected: false},
        {id: 'g4', color: 'black', piece: null, selected: false},
        {id: 'h4', color: 'white', piece: null, selected: false}
    ],
    [
        {id: 'a3', color: 'white', piece: null, selected: false}, 
        {id: 'b3', color: 'black', piece: null, selected: false},
        {id: 'c3', color: 'white', piece: null, selected: false},
        {id: 'd3', color: 'black', piece: null, selected: false},
        {id: 'e3', color: 'white', piece: null, selected: false},
        {id: 'f3', color: 'black', piece: null, selected: false},
        {id: 'g3', color: 'white', piece: null, selected: false},
        {id: 'h3', color: 'black', piece: null, selected: false}
    ],
    [
        {id: 'a2', color: 'black', piece: WhitePawn, selected: false}, 
        {id: 'b2', color: 'white', piece: WhitePawn, selected: false},
        {id: 'c2', color: 'black', piece: WhitePawn, selected: false},
        {id: 'd2', color: 'white', piece: WhitePawn, selected: false},
        {id: 'e2', color: 'black', piece: WhitePawn, selected: false},
        {id: 'f2', color: 'white', piece: WhitePawn, selected: false},
        {id: 'g2', color: 'black', piece: WhitePawn, selected: false},
        {id: 'h2', color: 'white', piece: WhitePawn, selected: false}
    ],
    [
        {id: 'a1', color: 'white', piece: WhiteRock, selected: false}, 
        {id: 'b1', color: 'black', piece: WhiteKnight, selected: false},
        {id: 'c1', color: 'white', piece: WhiteBishop, selected: false},
        {id: 'd1', color: 'black', piece: WhiteQueen, selected: false},
        {id: 'e1', color: 'white', piece: WhiteKing, selected: false},
        {id: 'f1', color: 'black', piece: WhiteBishop, selected: false},
        {id: 'g1', color: 'white', piece: WhiteKnight, selected: false},
        {id: 'h1', color: 'black', piece: WhiteRock, selected: false}
    ]
];