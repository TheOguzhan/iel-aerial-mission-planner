export type ACTION = { type: String }

export const waypoint = (): ACTION => ({
    type: "WAYPOINT"
})

export const splineWaypoint = (): ACTION => ({
    type: "SPLINE_WAYPOINT"
})

export const home = (): ACTION => ({
    type: "HOME"
})

export const loiterTurns = (): ACTION => ({
    type: "LOITER_TURNS"
})

export const loiterTime = (): ACTION => ({
    type: "LOITER_TIME"
})

export const returnToLaunch = (): ACTION => ({
    type: "RETURN_TO_LAUNCH"
})

export const land = (): ACTION => ({
    type: "LAND"
})

export const takeoff = (): ACTION => ({
    type: "TAKEOFF"
})

export const delay = (): ACTION => ({
    type: "DELAY"
})

export const guidedEnable = (): ACTION => ({
    type: "GUIDED_ENABLE"
})

export const payloadPlace = (): ACTION => ({
    type: "PAYLOAD_PLACE"
})

export const doGuidedLimits = (): ACTION => ({
    type: "DO_GUIDED_LIMITS"
})

export const doWinch = (): ACTION => ({
    type: "DO_WINCH"
})

export const doSetRoi = (): ACTION => ({
    type: "DO_SET_ROI"
})

export const conditionDelay = (): ACTION => ({
    type: "CONDITION_DELAY"
})

export const conditionChangeAlt = (): ACTION => ({
    type: "CONDITION_CHANGE_ALT"
})

export const conditionDistance = (): ACTION => ({
    type: "CONDITION_DISTANCE"
})

export const conditionYaw = (): ACTION => ({
    type: "CONDITION_YAW"
})

export const doJump = (): ACTION => ({
    type: "DO_JUMP"
})

export const doChangeSpeed = (): ACTION => ({
    type: "DO_CHANGE_SPEED"
})

export const doGripper = (): ACTION => ({
    type: "DO_GRIPPER"
})

export const doParachute = (): ACTION => ({
    type: "DO_PARACHUTE"
})

export const doSetCamTriggDist = (): ACTION => ({
    type: "DO_SET_CAM_TRIGG_DIST"
})

export const doSetRelay = (): ACTION => ({
    type: "DO_SET_RELAY"
})

export const doRepeatRelay = (): ACTION => ({
    type: "DO_REPEAT_RELAY"
})

export const doSetServo = (): ACTION => ({
    type: "DO_SET_SERVO"
})

export const doRepeatServo = (): ACTION => ({
    type: "DO_REPEAT_SERVO"
})

export const doDigicamConfigure = (): ACTION => ({
    type: "DO_DIGICAM_CONFIGURE"
})

export const doDigicamControl = (): ACTION => ({
    type: "DO_DIGICAM_CONTROL"
})

export const doMountControl = (): ACTION => ({
    type: "DO_MOUNT_CONTROL"
})

export const actionList = {
    ["WAYPOINT" as string]: waypoint,
    ["SPLINE_WAYPOINT" as string]: splineWaypoint,
    ["HOME" as string]: home,
    ["LOITER_TURNS" as string]: loiterTurns,
    ["LOITER_TIME" as string]: loiterTime,
    ["RETURN_TO_LAUNCH" as string]: returnToLaunch,
    ["LAND" as string]: land,
    ["TAKEOFF" as string]: takeoff,
    ["DELAY" as string]: delay,
    ["GUIDED_ENABLE" as string]: guidedEnable,
    ["PAYLOAD_PLACE" as string]: payloadPlace,
    ["DO_GUIDED_LIMITS" as string]: doGuidedLimits,
    ["DO_WINCH" as string]: doWinch,
    ["DO_SET_ROI" as string]: doSetRoi,
    ["CONDITION_DELAY" as string]: conditionDelay,
    ["CONDITION_CHANGE_ALT" as string]: conditionChangeAlt,
    ["CONDITION_DISTANCE" as string]: conditionDistance,
    ["CONDITION_YAW" as string]: conditionYaw,
    ["DO_JUMP" as string]: doJump,
    ["DO_CHANGE_SPEED" as string]: doChangeSpeed,
    ["DO_GRIPPER" as string]: doGripper,
    ["DO_PARACHUTE" as string]: doParachute,
    ["DO_SET_CAM_TRIGG_DIST" as string]: doSetCamTriggDist,
    ["DO_SET_RELAY" as string]: doSetRelay,
    ["DO_REPEAT_RELAY" as string]: doRepeatRelay,
    ["DO_SET_SERVO" as string]: doSetServo,
    ["DO_REPEAT_SERVO" as string]: doRepeatServo,
    ["DO_DIGICAM_CONTROL" as string]: doDigicamControl,
    ["DO_DIGICAM_CONFIGURE" as string]: doDigicamConfigure,
    ["DO_MOUNT_CONTROL" as string]: doMountControl,
}