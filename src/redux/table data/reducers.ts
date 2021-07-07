import { ACTION } from "./actions";
import array_move from "../../utils/arrayMover";
export interface DataState {
    data: Array<Data>
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
        case "UP_DATA": {
            const old_index: number = state.data.indexOf(action.payload);
            const new_index: number = old_index - 1;
            if(old_index === 1){
                return {...state}
            }
            if (new_index >= 0 && new_index < state.data.length) {
                const copyData = Object.assign([], state.data);
                const newData = array_move(copyData, old_index, new_index);
                return { ...state, data: [...newData] }
            }
            else {
                return { ...state, data: state.data }
            }
        }
        case "DOWN_DATA": {
            const old_index: number = state.data.indexOf(action.payload);
            const new_index: number = old_index + 1;
            if (new_index >= 0 && new_index < state.data.length) {
                const copyData = Object.assign([], state.data);
                const newData = array_move(copyData, old_index, new_index);
                return { ...state, data: [...newData] }
            }
            else {
                return { ...state, data: state.data }
            }
        }
        default:
            return state
    }
}