import { compose, createStore, combineReducers } from 'redux';
import { dataReducer } from "./table data/reducers";
import { stateReducer } from "./table state/reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export interface RootState {
    data: Data[],
    state: State
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(combineReducers({ dataReducer, stateReducer }), composeEnhancers());