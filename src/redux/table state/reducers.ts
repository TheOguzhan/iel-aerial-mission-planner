import { ACTION } from './actions';

export interface AllState {
    data: State
}

const initialState = {
    data: {
        state:
            {
                p1: "p1",
                p2: "p2",
                p3: "p3",
                p4: "p4",
            } as IState
    } as State
}


export const stateReducer = (state: AllState = initialState, action: ACTION) => {
    switch (action.type) {
        case "WAYPOINT": {
            return {
                state: {
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "HOME": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "SPLINE_WAYPOINT": {
            return {
                state: {
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "LOITER_TURNS": {
            return {
                state: {
                    p1: "Turns",
                    p2: "Radius",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "LOITER_TIME": {
            return {
                state: {
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "LOITER_UNLIM": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "RETURN_TO_LAUNCH": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "TAKEOFF": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
    }
}