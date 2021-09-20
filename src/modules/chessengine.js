import { Chess } from "chess.js";

const engine = new Chess();
const selectedSquares = [];

export const tryToMakeMove = (square) => {
    if (selectedSquares.length === 0) {
        if ((square.piece) 
            &&
            ((isWhitePiece(square.piece) && isWhiteTurn()) || (isBlackPiece(square.piece) && isBlackTurn()))) 
        {
            square.selected = !square.selected;
            selectedSquares.push(square);
        }
    } else {
        square.selected = !square.selected;
        const source = selectedSquares.pop();

        const legalMove = engine.move({
            from: source.id,
            to: square.id
        });

        if (legalMove) {
            square.piece = source.piece;
            source.piece = null;            
        }
}}

function checkPieceColor(color, piece) {
    return piece.name.startsWith(color);
}

function isWhitePiece(piece){
    return checkPieceColor("White", piece);
}

function isBlackPiece(piece){
    return checkPieceColor("Black", piece);
}

function isWhiteTurn() {
    return engine.turn() === "w";
}

function isBlackTurn() {
    return engine.turn() === "b";
}