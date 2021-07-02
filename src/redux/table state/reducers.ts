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
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "TAKEOFF": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                    latName: "",
                    longName: ""
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
                    p4: "Second UTC",
                    altRequired: false,
                    latName: "",
                    longName: ""
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
                    altRequired: false,
                    latName: "",
                    longName: ""
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
        case "DO_SET_ROI": {
            return {
                state: {
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                } as IState
            }
        }
        case "CONDITION_DELAY": {
            return {
                state: {
                    p1: "Time (sec)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "CONDITION_CHANGE_ALT": {
            return {
                state: {
                    p1: "Rate (cm/sec)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "CONDITION_DISTANCE": {
            return {
                state: {
                    p1: "Dist (m)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "CONDITION_YAW": {
            return {
                state: {
                    p1: "Deg",
                    p2: "Sec",
                    p3: "Dir 1=CW",
                    p4: "rel/abs",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_JUMP": {
            return {
                state: {
                    p1: "Deg",
                    p2: "Sec",
                    p3: "Dir 1=CW",
                    p4: "rel/abs",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_CHANGE_SPEED": {
            return {
                state: {
                    p1: "speed m/s",
                    p2: "speed m/s",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_GRIPPER": {
            return {
                state: {
                    p1: "Gripper no",
                    p2: "drop (0) / grab (1)",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_PARACHUTE": {
            return {
                state: {
                    p1: "Enable(1)/Release(2)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_SET_CAM_TRIGG_DIST": {
            return {
                state: {
                    p1: "Dist(m)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_SET_RELAY": {
            return {
                state: {
                    p1: "Relay no",
                    p2: "off (0) / on (1)",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_REPEAT_RELAY": {
            return {
                state: {
                    p1: "Relay no",
                    p2: "Relay #",
                    p3: "Delay (s)",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_SET_SERVO": {
            return {
                state: {
                    p1: "Ser no",
                    p2: "PWM",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_REPEAT_SERVO": {
            return {
                state: {
                    p1: "Ser no",
                    p2: "PWM",
                    p3: "Repeat #",
                    p4: "Delay (s)",
                    altRequired: false,
                    latName: "",
                    longName: ""
                } as IState
            }
        }
        case "DO_DIGICAM_CONFIGURE": {
            return {
                state: {
                    p1: "Mode",
                    p2: "Shutter speed",
                    p3: "Aperture",
                    p4: "ISO",
                    latName: "Exposure Mode",
                    longName: "Command ID"
                } as IState
            }
        }
        case "DO_DIGICAM_CONTROL": {
            return {
                state: {
                    p1: "On/Off",
                    p2: "Zoom position",
                    p3: "Zoom Step",
                    p4: "Focus Lock",
                    latName: "Shutter Cmd",
                    longName: "Command ID"
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