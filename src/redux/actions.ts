export type ACTION = { type: String, payload: Data, index?: number }


export const addData = (data: Data): ACTION => ({
    type: "ADD_DATA",
    payload: data
})

export const mutateData = (data: Data, index: number): ACTION => ({
    type: "MUTATE_DATA",
    payload: data,
    index
})

export const removeData = (data: Data): ACTION => ({
    type: "REMOVE_DATA",
    payload: data
})

export const upData = (data: Data): ACTION => ({
    type: "UP_DATA",
    payload: data
})

export const downData = (data: Data): ACTION => ({
    type: "DOWN_DATA",
    payload: data
})