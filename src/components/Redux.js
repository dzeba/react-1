console.log("hello redux");

const defaultState = {
    count: 0
};

/**
 * Actions:
 */
export function increase() {
    return {
        type: "INCREASE"
    };
}

export function decrease() {
    return {
        type: "DECREASE"
    };
}

/**
 * Reducer:
 */
function counterReducer(state = defaultState, action) {
    if (action.type === "INCREASE") {
        return {
            ...state,
            count: state.count + 1
        };
    } else if (action.type === "DECREASE") {
        return {
            ...state,
            count: state.count - 1
        };
    }
    return state;
}

function createStore(reducer) {
    let state = reducer(undefined, {});

    let listener = [];

    return {
        getState() {
            return state;
        },

        subscribe(callback) {
            listener.push(callback);
        },

        dispatch(action) {
            state = reducer(state, action);
            listener.forEach(callback => callback());
        }
    };
}

const store = createStore(counterReducer);
export default store;
// store.subscribe(() => {
//     console.log(store.getState());
// });
//
// store.dispatch({ type: "INCREASE" });
//
// store.dispatch({ type: "INCREASE" });
//
// store.dispatch({ type: "DECREASE" });