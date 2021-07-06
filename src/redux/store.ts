import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { dataReducer, DataState } from "./table data/reducers";
import { stateReducer, AllState } from "./table state/reducers";
import thunk from 'redux-thunk';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
export interface RootState {
    dataReducer: DataState,
    stateReducer: AllState
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(combineReducers({ dataReducer, stateReducer }), composeEnhancers(applyMiddleware(thunk)));