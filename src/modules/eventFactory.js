function FirstClickEmptySquareEvent(square){ this.square = square; }

function FirstClickPieceInSquareEvent(square){ this.square = square; }

function SecondClickEmptySquareEvent(square){ this.square = square; }

function SecondClickPieceInSquareEvent(square){ this.square = square; }

let isFirstClick = true;

export function createEvent(square){
    if (isFirstClick && !square.piece) return new FirstClickEmptySquareEvent(square); 
    if (isFirstClick && square.piece) return new FirstClickPieceInSquareEvent(square); 
    if (!isFirstClick && !square.piece) return new SecondClickEmptySquareEvent(square); 
    if (!isFirstClick && square.piece) return new SecondClickPieceInSquareEvent(square);
    isFirstClick = !isFirstClick; 
}

export const eventTypes = {
    firstClickEmptySquareEvent: FirstClickEmptySquareEvent,
    firstClickPieceInSquareEvent: FirstClickPieceInSquareEvent,
    secondClickEmptySquareEvent: SecondClickEmptySquareEvent,
    secondClickPieceInSquareEvent: SecondClickPieceInSquareEvent
}
