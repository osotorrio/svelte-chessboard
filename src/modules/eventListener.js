const listeners = [
    {type: 'firstClickPieceToBeMovedEvent', handle: handleFirstClickPieceToBeMovedEvent},
    {type: 'secondClickEmptySquareEvent', handle: handleSecondClickEmptySquareEvent},
    {type: 'secondClickPieceToBeRemovedEvent', handle: handleSecondClickPieceToBeRemovedEvent},
];

let source = null;

function handleFirstClickPieceToBeMovedEvent(target) {
    //event.data.target.parentElement.style.backgroundColor = '#6B8E23';
    source = target.parentElement;
}

function handleSecondClickEmptySquareEvent(target) {
    const piece = source.firstChild;
    source.removeChild(piece);
    target.appendChild(piece);
}

function handleSecondClickPieceToBeRemovedEvent(target) {
    const piece = source.firstChild;
    source.removeChild(piece);

    target = target.parentElement;
    target.removeChild(target.firstChild);
    target.appendChild(piece);
}

export default function handleEvent(event) {
    const listener = listeners.find(e => e.type === event.type);
    if(listener) listener.handle(event.data);
}