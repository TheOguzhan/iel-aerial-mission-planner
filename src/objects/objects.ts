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
    latRequired: true,
    longRequired: true,
    altRequired: true,
    payload: 16
}

const HOME_COMMAND: CommandType = {
    Command: "HOME_POINT",
    p1: true,
    p2: false,
    p3: false,
    p4: false,
    p1Name: "Delay",
    latRequired: true,
    longRequired: true,
    altRequired: true,
    payload: 16,
    p1Payload: Number(0).toFixed(6),
    p2Payload: Number(0).toFixed(6),
    p3Payload: Number(0).toFixed(6),
    p4Payload: Number(0).toFixed(6),
}



const COMMAND_TYPE_ARRAY: Array<CommandType> = [
    WAYPOINT_COMMAND,
    HOME_COMMAND
]

export {
    FrameObject,
    FrameArray,
    CommandArray,
    COMMAND_TYPE_ARRAY
};