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
        {id: 'a8', color: 'black', piece: BlackRock}, 
        {id: 'b8', color: 'white', piece: BlackKnight},
        {id: 'c8', color: 'black', piece: BlackBishop},
        {id: 'd8', color: 'white', piece: BlackQueen},
        {id: 'e8', color: 'black', piece: BlackKing},
        {id: 'f8', color: 'white', piece: BlackBishop},
        {id: 'g8', color: 'black', piece: BlackKnight},
        {id: 'h8', color: 'white', piece: BlackRock},
    ],
    [
        {id: 'a7', color: 'white', piece: BlackPawn}, 
        {id: 'b7', color: 'black', piece: BlackPawn},
        {id: 'c7', color: 'white', piece: BlackPawn},
        {id: 'd7', color: 'black', piece: BlackPawn},
        {id: 'e7', color: 'white', piece: BlackPawn},
        {id: 'f7', color: 'black', piece: BlackPawn},
        {id: 'g7', color: 'white', piece: BlackPawn},
        {id: 'h7', color: 'black', piece: BlackPawn},
    ],
    [
        {id: 'a6', color: 'black', piece: null}, 
        {id: 'b6', color: 'white', piece: null},
        {id: 'c6', color: 'black', piece: null},
        {id: 'd6', color: 'white', piece: null},
        {id: 'e6', color: 'black', piece: null},
        {id: 'f6', color: 'white', piece: null},
        {id: 'g6', color: 'black', piece: null},
        {id: 'h6', color: 'white', piece: null},
    ],
    [
        {id: 'a5', color: 'white', piece: null}, 
        {id: 'b5', color: 'black', piece: null},
        {id: 'c5', color: 'white', piece: null},
        {id: 'd5', color: 'black', piece: null},
        {id: 'e5', color: 'white', piece: null},
        {id: 'f5', color: 'black', piece: null},
        {id: 'g5', color: 'white', piece: null},
        {id: 'h5', color: 'black', piece: null},
    ],
    [
        {id: 'a4', color: 'black', piece: null}, 
        {id: 'b4', color: 'white', piece: null},
        {id: 'c4', color: 'black', piece: null},
        {id: 'd4', color: 'white', piece: null},
        {id: 'e4', color: 'black', piece: null},
        {id: 'f4', color: 'white', piece: null},
        {id: 'g4', color: 'black', piece: null},
        {id: 'h4', color: 'white', piece: null},
    ],
    [
        {id: 'a3', color: 'white', piece: null}, 
        {id: 'b3', color: 'black', piece: null},
        {id: 'c3', color: 'white', piece: null},
        {id: 'd3', color: 'black', piece: null},
        {id: 'e3', color: 'white', piece: null},
        {id: 'f3', color: 'black', piece: null},
        {id: 'g3', color: 'white', piece: null},
        {id: 'h3', color: 'black', piece: null},
    ],
    [
        {id: 'a2', color: 'black', piece: WhitePawn}, 
        {id: 'b2', color: 'white', piece: WhitePawn},
        {id: 'c2', color: 'black', piece: WhitePawn},
        {id: 'd2', color: 'white', piece: WhitePawn},
        {id: 'e2', color: 'black', piece: WhitePawn},
        {id: 'f2', color: 'white', piece: WhitePawn},
        {id: 'g2', color: 'black', piece: WhitePawn},
        {id: 'h2', color: 'white', piece: WhitePawn},
    ],
    [
        {id: 'a1', color: 'white', piece: WhiteRock}, 
        {id: 'b1', color: 'black', piece: WhiteKnight},
        {id: 'c1', color: 'white', piece: WhiteBishop},
        {id: 'd1', color: 'black', piece: WhiteQueen},
        {id: 'e1', color: 'white', piece: WhiteKing},
        {id: 'f1', color: 'black', piece: WhiteBishop},
        {id: 'g1', color: 'white', piece: WhiteKnight},
        {id: 'h1', color: 'black', piece: WhiteRock},
    ]
];