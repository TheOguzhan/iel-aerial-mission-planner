import { createStore } from 'redux';
import { dataReducer } from "./reducers";

export const store = createStore(dataReducer);