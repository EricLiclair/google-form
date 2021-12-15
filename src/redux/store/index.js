import { createStore } from "redux";
import rootReducer from "../reducers";

console.log(localStorage.getItem('test'));
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistantState', serialisedState);
    } catch (e) {
        console.warn(e);
    }
}


function loadFromLocalStorage() {
    try {
        const serialisedData = localStorage.getItem('persistantState');
        if (serialisedData === null) return undefined;
        return JSON.parse(serialisedData);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;