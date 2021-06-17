const FrameObject: FrameObjectType = {
    RELATIVE: 3,
    ABSOLUTE: 0,
    TERRAIN: 10
};

const FrameArray = ["RELATIVE", "ABSOLUTE", "TERRAIN"];

const CommandArray: Array<String> = [
    "WAYPOINT",
    "SPLINE_WAYPOINT",
    "LOITER_TURNS",
    "LOITER_TIME",
    "RETURN_TO_LAUNCH",
    "LAND",
    "TAKEOFF",
    "DELAY",
    "GUIDED_ENABLE",
    "PAYLOAD_PLACE",
    "DO_GUIDED_LIMITS",
    "DO_WINCH",
    "DO_SET_ROI",
    "CONDITION_DELAY",
    "CONDITION_CHANGE_ALT",
    "CONDITION_DISTANCE",
    "CONDITION_YAW",
    "DO_JUMP",
    "DO_CHANGE_SPEED",
    "DO_GRIPPER",
    "DO_PARACHUTE",
    "DO_SET_CAM_TRIGG_DIST",
    "DO_SET_RELAY",
    "DO_REPEAT_RELAY",
    "DO_SET_SERVO",
    "DO_REPEAT_SERVO",
    "DO_DIGICAM_CONFIGURE",
    "DO_DIGICAM_CONTROL",
    "DO_MOUNT_CONTROL"
];

const WAYPOINT: CommandType = {
    Command: "WAYPOINT",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Delay",
    payload: 16,
}

const HOME: CommandType = {
    Command: "HOME_POINT",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    payload: 16,
}

const SPLINE_WAYPOINT: CommandType = {
    Command: "SPLINE_WAYPOINT",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    payload: 82,
    spline: true
}

const LOITER_TURNS: CommandType = {
    Command: "LOITER_TURNS",
    p1: true,
    p2: false,
    p3: true,
    p4: false,
    payload: 18,
    p1Name: "Turns",
    p3Name: "Radius",
}

const LOITER_TIME: CommandType = {
    Command: "LOITER_TIME",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Delay",
    payload: 19
}

const LOITER_UNLIM: CommandType = {
    Command: "LOITER_UNLIM",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    payload: 17
}

const RETURN_TO_LAUNCH: CommandType = {
    Command: "RETURN_TO_LAUNCH",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 20
}

const TAKEOFF: CommandType = {
    Command: "TAKEOFF",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    latRequired: false,
    longRequired: false,
    shown: false,
    payload: 22
}


const LAND: CommandType = {
    Command: "LAND",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    payload: 21
}

const DELAY: CommandType = {
    Command: "DELAY",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "Seconds (or -1)",
    p2Name: "Hour UTC",
    p3Name: "Minute UTC",
    p4Name: "Second UTC",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    payload: 93
}

const GUIDED_ENABLE: CommandType = {
    Command: "GUIDED_ENABLE",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "on=1/off=0",
    payload: 92
}

const PAYLOAD_PLACE: CommandType = {
    Command: "PAYLOAD_PLACE",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "max decent",
    payload: 94
}

const DO_GUIDED_LIMITS: CommandType = {
    Command: "DO_GUIDED_LIMITS",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "timeout S",
    p2Name: "min alt",
    p3Name: "max alt",
    p4Name: "max dist",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 222
}

const DO_WINCH: CommandType = {
    Command: "DO_WINCH",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "winch no",
    p2Name: "action",
    p3Name: "length",
    p4Name: "rate",
    isolated: true,
    payload: 42600
}

const DO_SET_ROI: CommandType = {
    Command: "DO_SET_ROI",
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    payload: 201,
}

const CONDITION_DELAY: CommandType = {
    Command: "CONDITION_DELAY",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Time (sec)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 112
}

const CONDITION_CHANGE_ALT: CommandType = {
    Command: "CONDITION_CHANGE_ALT",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Rate (cm/sec)",
    latRequired: false,
    longRequired: false,
    shown: false,
    payload: 113
}

const CONDITION_DISTANCE: CommandType = {
    Command: "CONDITION_DISTANCE",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Dist (m)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 114
}

const CONDITION_YAW: CommandType = {
    Command: "CONDITION_DISTANCE",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "Deg",
    p2Name: "Sec",
    p3Name: "Dir 1=CW",
    p4Name: "rel/abs",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 115
}

const DO_JUMP: CommandType = {
    Command: "CONDITION_DISTANCE",
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p1Name: "WP #",
    p2Name: "Repeat",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 177
}

const DO_CHANGE_SPEED: CommandType = {
    Command: "DO_CHANGE_SPEED",
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p1Name: "speed m/s",
    p2Name: "speed m/s",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 178
}

const DO_GRIPPER: CommandType = {
    Command: "DO_GRIPPER",
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p1Name: "Gripper no",
    p2Name: "drop (0) / grab (1)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 211
}

const DO_PARACHUTE: CommandType = {
    Command: "DO_PARACHUTE",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Enable(1)/Release(2)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 208
}

const DO_SET_CAM_TRIGG_DIST: CommandType = {
    Command: "DO_SET_CAM_TRIGG_DIST",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Dist(m)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 206
}

const DO_SET_RELAY: CommandType = {
    Command: "DO_SET_RELAY",
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p1Name: "Relay no",
    p2Name: "off (0) / on (1)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 181
}

const DO_REPEAT_RELAY: CommandType = {
    Command: "DO_REPEAT_RELAY",
    p1: true,
    p2: true,
    p3: true,
    p4: false,
    p1Name: "Relay no",
    p2Name: "Relay #",
    p3Name: "Delay (s)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 182
}

const DO_SET_SERVO: CommandType = {
    Command: "DO_SET_SERVO",
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p1Name: "Ser No",
    p2Name: "PWM",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 183
}

const DO_REPEAT_SERVO: CommandType = {
    Command: "DO_REPEAT_SERVO",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "Ser no",
    p2Name: "PWM",
    p3Name: "Repeat #",
    p4Name: "Delay (s)",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 184
}

const DO_DIGICAM_CONFIGURE: CommandType = {
    Command: "DO_DIGICAM_CONFIGURE",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "Mode",
    p2Name: "Shutter speed",
    p3Name: "Aperture",
    p4Name: "ISO",
    latModified: true,
    longModified: true,
    latName: "Exposure Mode",
    longName: "Command ID",
    payload: 202
}

const DO_DIGICAM_CONTROL: CommandType = {
    Command: "DO_DIGICAM_CONTROL",
    p1: true,
    p2: true,
    p3: true,
    p4: true,
    p1Name: "On/Off",
    p2Name: "Zoom position",
    p3Name: "Zoom Step",
    p4Name: "Focus Lock",
    latModified: true,
    longModified: true,
    latName: "Shutter Cmd",
    longName: "Command ID",
    payload: 203
}

const DO_MOUNT_CONTROL: CommandType = {
    Command: "DO_MOUNT_CONTROL",
    p1: true,
    p2: true,
    p3: true,
    p4: false,
    p1Name: "Pitch",
    p2Name: "Roll",
    p3Name: "Yaw",
    latRequired: false,
    longRequired: false,
    altRequired: false,
    shown: false,
    payload: 205
}

const COMMAND_TYPE_OBJECT_ARRAY: Array<CommandObject> = [
    { "WAYPOINT": WAYPOINT },
    { "HOME": HOME },
    { "SPLINE_WAYPOINT": SPLINE_WAYPOINT },
    { "LOITER_TURNS": LOITER_TURNS },
    { "LOITER_TIME": LOITER_TIME },
    { "LOITER_UNLIM": LOITER_UNLIM },
    { "RETURN_TO_LAUNCH": RETURN_TO_LAUNCH },
    { "TAKEOFF": TAKEOFF },
    { "LAND": LAND },
    { "DELAY": DELAY },
    { "GUIDED_ENABLE": GUIDED_ENABLE },
    { "PAYLOAD_PLACE": PAYLOAD_PLACE },
    { "DO_GUIDED_LIMITS": DO_GUIDED_LIMITS },
    { "DO_WINCH": DO_WINCH },
    { "DO_SET_ROI": DO_SET_ROI },
    { "CONDITION_DELAY": CONDITION_DELAY },
    { "CONDITION_CHANGE_ALT": CONDITION_CHANGE_ALT },
    { "CONDITION_DISTANCE": CONDITION_DISTANCE },
    { "CONDITION_YAW": CONDITION_YAW },
    { "DO_JUMP": DO_JUMP },
    { "DO_CHANGE_SPEED": DO_CHANGE_SPEED },
    { "DO_GRIPPER": DO_GRIPPER },
    { "DO_PARACHUTE": DO_PARACHUTE },
    { "DO_SET_CAM_TRIGG_DIST": DO_SET_CAM_TRIGG_DIST },
    { "DO_SET_RELAY": DO_SET_RELAY },
    { "DO_REPEAT_RELAY": DO_REPEAT_RELAY },
    { "DO_SET_SERVO": DO_SET_SERVO },
    { "DO_REPEAT_SERVO": DO_REPEAT_SERVO },
    { "DO_DIGICAM_CONFIGURE": DO_DIGICAM_CONFIGURE },
    { "DO_DIGICAM_CONTROL": DO_DIGICAM_CONTROL },
    { "DO_MOUNT_CONTROL": DO_MOUNT_CONTROL }
]

export {
    FrameObject,
    FrameArray,
    CommandArray,
    COMMAND_TYPE_OBJECT_ARRAY
};