import { createStore } from "redux"

let defaultState = {
    counter: 0,
    page404: {}
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'A': {
            let tempState = JSON.parse(JSON.stringify(state));
            tempState.counter = tempState.counter + 1;
            return tempState;
        }
        case 'B': {
            let tempState = JSON.parse(JSON.stringify(state));
            tempState.counter = tempState.counter - 1;
            return tempState;
        }
        default:
            return state
    }
}

let store = createStore(reducer);
export default store;
