const firstClickEmptySquareEvent = {type: 'firstClickEmptySquareEvent'};

const firstClickPieceToBeMovedEvent = {type: 'firstClickPieceToBeMovedEvent', data: null};

const secondClickEmptySquareEvent = {type: 'secondClickEmptySquareEvent', data: null};

const secondClickPieceToBeRemovedEvent = {type: 'secondClickPieceToBeRemovedEvent', data: null};

let isFirstClick = true;

function createEvent(e){
    if (isFirstClick) {
        isFirstClick = !isFirstClick;

        if (e.target.tagName === 'DIV')
        {
            isFirstClick = true;
            return firstClickEmptySquareEvent;
        }

        firstClickPieceToBeMovedEvent.data = e.target;
        return firstClickPieceToBeMovedEvent;
    } else {
        isFirstClick = !isFirstClick;

        if (e.target.tagName === 'DIV') {
            secondClickEmptySquareEvent.data = e.target;
            return secondClickEmptySquareEvent;
        }

        secondClickPieceToBeRemovedEvent.data = e.target;
        return secondClickPieceToBeRemovedEvent;
    }
}

export default createEvent;
