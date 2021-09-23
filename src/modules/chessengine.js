import { Chess } from "chess.js";

const engine = new Chess();
const selectedSquares = [];

class FirstClickHandler {
    canHandle(target) {
        if (isFirstClick() 
            && target.piece 
            && ((isWhitePiece(target.piece) && isWhiteTurn()) || (isBlackPiece(target.piece) && isBlackTurn()))) {
            return true;
        }
        return false;
    }

    handle(target) {
        target.selected = true;
        selectedSquares.push(target);
    }
}

class SecondClickSamePieceHandler {
    canHandle(target) {
        if (target.id === getLastMove().id) {
            return true;
        }
        return false;
    }

    handle(target) {
        target.selected = false;
        selectedSquares.pop();
    }
}

class SecondClickSameColorHandler {
    canHandle(target) {
        if (target.id !== getLastMove().id && isWhitePiece(target.piece) && isWhitePiece(getLastMove().piece)) {
            return true;
        }
        return false;
    }

    handle(target) {
        selectedSquares.pop().selected = false;
        target.selected = true;
        selectedSquares.push(target);
    }
}


const handlers = [
    new FirstClickHandler(),
    new SecondClickSamePieceHandler(),
    new SecondClickSameColorHandler(),
];

export const tryToMakeMove = (target) => {
    for (let i = 0; i < handlers.length; i++) {
        const handler = handlers[i];
        if (handler.canHandle(target)) {
            handler.handle(target);
            return;
        }
    }
}

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

function isFirstClick() {
    return selectedSquares.length % 2 === 0;
}

function getLastMove() {
    return selectedSquares[selectedSquares.length - 1];
}