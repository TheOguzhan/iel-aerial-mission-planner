import { ACTION } from "./actions";

export interface DataState {
    data: Data[]
}

const initialState = {
    data: []
}

export const dataReducer = (state: DataState = initialState, action: ACTION) => {
    switch (action.type) {
        case "ADD_DATA": {
            return { ...state, data: [...state.data, action.payload] }
        }
        case "MUTATE_DATA": {
            return { ...state, data: [...state.data.slice(0, action.index), action.payload, ...state.data.slice(action.index ? action.index + 1 : undefined, state.data.length)] }
        }
        default:
            return state
    }
}