import { Chess } from "chess.js";

const engine = new Chess();
const selectedSquares = [];

export const tryToMakeMove = (target) => {
    if (selectedSquares.length % 2 === 0) {
        if ((target.piece) 
            &&
            ((isWhitePiece(target.piece) && isWhiteTurn()) || (isBlackPiece(target.piece) && isBlackTurn()))) 
        {
            target.selected = !target.selected;
            selectedSquares.push(target);
            unselectPreviousSquares();
        }
    } else {
        const source = selectedSquares[selectedSquares.length - 1];
        target.selected = !target.selected;
        selectedSquares.push(target);

        const legalMove = engine.move({
            from: source.id,
            to: target.id
        });

        if (legalMove) {
            target.piece = source.piece;
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

function unselectPreviousSquares(){
    if (selectedSquares.length > 2) {
        selectedSquares[selectedSquares.length - 2].selected = false;
        selectedSquares[selectedSquares.length - 3].selected = false;
    }
}