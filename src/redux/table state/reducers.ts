import { ACTION } from './actions';
import { createState } from '../../utils/createState';
export interface AllState {
    state: State
}

const initialState = {
    state: createState({
        p1: "p1",
        p2: "p2",
        p3: "p3",
        p4: "p4",
    })
}


export const stateReducer = (state: AllState = initialState, action: ACTION) => {
    switch (action.type) {
        case "WAYPOINT": {


            return {

                state: createState({
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: "",
                })
            }
        }
        case "HOME": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                })
            }
        }
        case "SPLINE_WAYPOINT": {


            return {

                state: createState({
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: "",
                })
            }
        }
        case "LOITER_TURNS": {


            return {

                state: createState({
                    p1: "Turns",
                    p2: "Radius",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "LOITER_TIME": {

            return {

                state: createState({
                    p1: "Delay",
                    p2: "",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "LOITER_UNLIM": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "RETURN_TO_LAUNCH": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "TAKEOFF": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                    latName: "",
                    longName: ""
                })
            }
        }
        case "LAND": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "DELAY": {


            return {

                state: createState({
                    p1: "Seconds (or -1)",
                    p2: "Hour UTC",
                    p3: "Minute UTC",
                    p4: "Second UTC",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "GUIDED_ENABLE": {


            return {

                state: createState({
                    p1: "on=1/off=0",
                    p2: "",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "PAYLOAD_PLACE": {


            return {

                state: createState({
                    p1: "Max decent",
                    p2: "",
                    p3: "",
                    p4: ""
                })
            }
        }
        case "DO_GUIDED_LIMITS": {


            return {

                state: createState({
                    p1: "Timeout S",
                    p2: "Min alt",
                    p3: "Max alt",
                    p4: "Max dist",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_WINCH": {


            return {

                state: createState({
                    p1: "Winch no",
                    p2: "Action",
                    p3: "Length",
                    p4: "Rate",
                })
            }
        }
        case "DO_SET_ROI": {


            return {

                state: createState({
                    p1: "",
                    p2: "",
                    p3: "",
                    p4: "",
                })
            }
        }
        case "CONDITION_DELAY": {


            return {

                state: createState({
                    p1: "Time (sec)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "CONDITION_CHANGE_ALT": {


            return {

                state: createState({
                    p1: "Rate (cm/sec)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "CONDITION_DISTANCE": {


            return {

                state: createState({
                    p1: "Dist (m)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "CONDITION_YAW": {


            return {

                state: createState({
                    p1: "Deg",
                    p2: "Sec",
                    p3: "Dir 1=CW",
                    p4: "rel/abs",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_JUMP": {


            return {

                state: createState({
                    p1: "Deg",
                    p2: "Sec",
                    p3: "Dir 1=CW",
                    p4: "rel/abs",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_CHANGE_SPEED": {


            return {

                state: createState({
                    p1: "Speed m/s",
                    p2: "Speed m/s",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_GRIPPER": {


            return {

                state: createState({
                    p1: "Gripper no",
                    p2: "drop (0) / grab (1)",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_PARACHUTE": {


            return {

                state: createState({
                    p1: "Enable(1)/Release(2)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_SET_CAM_TRIGG_DIST": {


            return {

                state: createState({
                    p1: "Dist(m)",
                    p2: "",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_SET_RELAY": {


            return {

                state: createState({
                    p1: "Relay no",
                    p2: "off (0) / on (1)",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_REPEAT_RELAY": {


            return {

                state: createState({
                    p1: "Relay no",
                    p2: "Relay #",
                    p3: "Delay (s)",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_SET_SERVO": {


            return {

                state: createState({
                    p1: "Ser no",
                    p2: "PWM",
                    p3: "",
                    p4: "",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_REPEAT_SERVO": {


            return {

                state: createState({
                    p1: "Ser no",
                    p2: "PWM",
                    p3: "Repeat #",
                    p4: "Delay (s)",
                    altRequired: false,
                    latName: "",
                    longName: ""
                })
            }
        }
        case "DO_DIGICAM_CONFIGURE": {


            return {

                state: createState({
                    p1: "Mode",
                    p2: "Shutter speed",
                    p3: "Aperture",
                    p4: "ISO",
                    latName: "Exposure Mode",
                    longName: "Command ID"
                })
            }
        }
        case "DO_DIGICAM_CONTROL": {


            return {

                state: createState({
                    p1: "On/Off",
                    p2: "Zoom position",
                    p3: "Zoom Step",
                    p4: "Focus Lock",
                    latName: "Shutter Cmd",
                    longName: "Command ID"
                })
            }
        }
        default: {
            return state
        }
    }
}