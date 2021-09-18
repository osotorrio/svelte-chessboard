class FirstClickEmptySquareEvent{
    constructor(square){ this.square = square; }
}

class FirstClickPieceInSquareEvent{
    constructor(square){ this.square = square; }
}

class SecondClickEmptySquareEvent{
    constructor(square){ this.square = square; }
}

class SecondClickPieceInSquareEvent{
    constructor(square){ this.square = square; }
}

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
