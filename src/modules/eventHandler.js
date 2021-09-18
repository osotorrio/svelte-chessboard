import { eventTypes } from "./eventFactory";

const listeners = [
    {type: eventTypes.FirstClickEmptySquareEvent, handle: firstClickEmptySquareEventHandler},
    {type: eventTypes.FirstClickPieceInSquareEvent, handle: firstClickPieceInSquareEventHandler},
    {type: eventTypes.SecondClickEmptySquareEvent, handle: secondClickEmptySquareEventHandler},
    {type: eventTypes.SecondClickPieceInSquareEvent, handle: secondClickPieceInSquareEventHandler},
];

function firstClickEmptySquareEventHandler(event) {
    console.log(event.square);
}

function firstClickPieceInSquareEventHandler(event) {
    console.log(event.square);
}

function secondClickEmptySquareEventHandler(event) {
    console.log(event.square);
}

function secondClickPieceInSquareEventHandler(event) {
    console.log(event.square);
}

export default function handleEvent(event) {
    const listener = listeners.find(e => event instanceof e.type);
    if(listener) listener.handle(event);
}