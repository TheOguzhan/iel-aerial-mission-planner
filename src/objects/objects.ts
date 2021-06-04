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
    "DO_MOUNT_CONTROL",
    "UNKNOWN"
];

const WAYPOINT_COMMAND: CommandType = {
    Command: "WAYPOINT",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Delay",
    payload: 16,
}

const HOME_COMMAND: CommandType = {
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

const COMMAND_TYPE_OBJECT_ARRAY: Array<CommandObject> = [
    { "WAYPOINT": WAYPOINT_COMMAND },
    { "HOME": HOME_COMMAND },
    { "SPLINE_WAYPOINT": SPLINE_WAYPOINT },
    { "LOITER_TURNS": LOITER_TURNS },
    { "LOITER_TIME": LOITER_TIME },
    { "LOITER_UNLIM": LOITER_UNLIM },
    { "RETURN_TO_LAUNCH": RETURN_TO_LAUNCH}
]

export {
    FrameObject,
    FrameArray,
    CommandArray,
    COMMAND_TYPE_OBJECT_ARRAY
};