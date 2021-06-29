import { ACTION } from './actions';

export interface AllState {
    state: Array<State>
}

const initialState = {
    allState: []
}

export const stateReducer = (state: AllState = initialState, action: ACTION) => {
    switch (action.type){}
}