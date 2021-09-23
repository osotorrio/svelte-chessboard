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
        console.log("FirstClickHandler");
        target.selected = true;
        selectedSquares.push(target);
    }
}

class SecondClickSamePieceHandler {
    canHandle(target) {
        if (!isFirstClick() && target.id === getLastMove().id) {
            return true;
        }
        return false;
    }

    handle(target) {
        console.log("SecondClickSamePieceHandler");
        target.selected = false;
        selectedSquares.pop();
    }
}

class SecondClickSameColorHandler {
    canHandle(target) {
        if (!isFirstClick() 
            && target.piece 
            && target.id !== getLastMove().id 
            && (isWhitePiece(target.piece) && isWhitePiece(getLastMove().piece) || isBlackPiece(target.piece) && isBlackPiece(getLastMove().piece))) {
            return true;
        }
        return false;
    }

    handle(target) {
        console.log("SecondClickSameColorHandler");
        selectedSquares.pop().selected = false;
        target.selected = true;
        selectedSquares.push(target);
    }
}

class SecondClickDifferentColorHandler {
    canHandle(target) {
        if (!isFirstClick() 
            && target.piece 
            && target.id !== getLastMove().id 
            && (isWhitePiece(target.piece) && isBlackPiece(getLastMove().piece) || isBlackPiece(target.piece) && isWhitePiece(getLastMove().piece))) {
            return true;
        }
        return false;
    }

    handle(target) {
        console.log("SecondClickDifferentColorHandler");
        selectedSquares.pop().selected = false;
    }
}

class SecondClickLegalMoveHandler {
    canHandle(target) {
        const isLegalMove = engine.move({
            from: getLastMove().id,
            to: target.id
        });

        if (!isFirstClick() && isLegalMove) {
            return true;
        }
        return false;
    }

    handle(target) {
        console.log("SecondClickLegalMoveHandler");
        const source = getLastMove();
        target.selected = true;
        target.piece = source.piece;
        source.piece = null;
        selectedSquares.push(target);
        if (selectedSquares.length > 2) {
            selectedSquares[selectedSquares.length -3].selected = false;
            selectedSquares[selectedSquares.length -4].selected = false;
        }
    }
}

const handlers = [
    new FirstClickHandler(),
    new SecondClickSamePieceHandler(),
    new SecondClickSameColorHandler(),
    new SecondClickDifferentColorHandler(),
    new SecondClickLegalMoveHandler()
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