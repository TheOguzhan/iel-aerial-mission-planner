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
            if (action.index === 0) {
                return { ...state, data: [action.payload, ...state.data.slice(1, state.data.length)] }
            }
            else {
                return { ...state, data: [...state.data.slice(0, action.index), action.payload, ...state.data.slice(action.index ? action.index + 1 : undefined, state.data.length)] }
            }
        }
        case "REMOVE_DATA": {
            const copyData = Object.assign([], state.data);
            const index = copyData.indexOf(action.payload);
            if (index > -1) {
                copyData.splice(index, 1);
            }
            return { ...state, data: [...copyData] };
        }
        default:
            return state
    }
}