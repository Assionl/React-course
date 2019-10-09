let defaultState = {
    guessCity: {},
    hotCity: null,
    groupCity: null
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'mapCitiesType': {
            let tempState = JSON.parse(JSON.stringify(state));
            tempState.guessCity = action.res[0].data;
            tempState.hotCity = action.res[1].data;
            tempState.groupCity = action.res[2].data;
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
};
// default导出的时候，在导入的时候可以进行重命名(不加括号)
export default reducer;