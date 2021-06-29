import { ACTION } from './actions';

export interface AllState {
    data: Array<State>
}

const initialState = {
    data: []
}


export const stateReducer = (state: AllState = initialState, action: ACTION) => {
    switch (action.type) {

    }
}