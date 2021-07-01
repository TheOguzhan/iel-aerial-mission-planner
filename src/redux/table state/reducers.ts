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
        case "LAND": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "DELAY": {
            return {
                state: {
                    p1: "Seconds (or -1)",
                    p2: "Hour UTC",
                    p3: "Minute UTC",
                    p4: "Second UTC"
                } as IState
            }
        }
        case "GUIDED_ENABLE": {
            return {
                state: {
                    p1: "on=1/off=0",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "PAYLOAD_PLACE": {
            return {
                state: {
                    p1: "max decent",
                    p2: "",
                    p3: "",
                    p4: ""
                } as IState
            }
        }
        case "DO_GUIDED_LIMITS": {
            return {
                state: {
                    p1: "timeout S",
                    p2: "min alt",
                    p3: "max alt",
                    p4: "max dist",
                } as IState
            }
        }
        case "DO_WINCH": {
            return {
                state: {
                    p1: "winch no",
                    p2: "action",
                    p3: "length",
                    p4: "rate",
                } as IState
            }
        }
        default: {
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