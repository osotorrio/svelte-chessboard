import { Chess } from "chess.js";

const engine = new Chess();
const selectedSquares = [];

export const registerSelectedSquare = square => selectedSquares.push(square);

export const hasSelectedTwoSquares = () => selectedSquares.length === 2;

export const tryToMakeMove = () => {
    const target = selectedSquares.pop();
    const source = selectedSquares.pop();

    const legalMove = engine.move({
        from: source.id,
        to: target.id
    });

    if (legalMove) {
        target.piece = source.piece;
        source.piece = null;
        return true;
    }

    return false;
}