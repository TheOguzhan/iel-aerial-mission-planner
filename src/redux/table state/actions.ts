export type ACTION = { type: String }

export const waypoint = (state: State): ACTION => ({
    type: "WAYPOINT"
})

export const splineWaypoint = (state: State): ACTION => ({
    type: "SPLINE_WAYPOINT"
})

export const home = (state: State): ACTION => ({
    type: "HOME"
})

export const loiterTurns = (state: State): ACTION => ({
    type: "LOITER_TURNS"
})

export const loiterTime = (state: State): ACTION => ({
    type: "LOITER_TIME"
})

export const returnToLaunch = (state: State): ACTION => ({
    type: "RETURN_TO_LAUNCH"
})

export const land = (state: State): ACTION => ({
    type: "LAND"
})

export const takeoff = (state: State): ACTION => ({
    type: "TAKEOFF"
})

export const delay = (state: State): ACTION => ({
    type: "DELAY"
})

export const guidedEnable = (state: State): ACTION => ({
    type: "GUIDED_ENABLE"
})

export const payloadPlace = (state: State): ACTION => ({
    type: "PAYLOAD_PLACE"
})

export const doGuidedLimits = (state: State): ACTION => ({
    type: "DO_GUIDED_LIMITS"
})

export const doWinch = (state: State): ACTION => ({
    type: "DO_WINCH"
})

export const doSetRoi = (state: State): ACTION => ({
    type: "DO_SET_ROI"
})

export const conditionDelay = (state: State): ACTION => ({
    type: "CONDITION_DELAY"
})

export const conditionChangeAlt = (state: State): ACTION => ({
    type: "CONDITION_CHANGE_ALT"
})

export const conditionDistance = (state: State): ACTION => ({
    type: "CONDITION_DISTANCE"
})

export const conditionYaw = (state: State): ACTION => ({
    type: "CONDITION_YAW"
})

export const doJump = (state: State): ACTION => ({
    type: "DO_JUMP"
})

export const doChangeSpeed = (state: State): ACTION => ({
    type: "DO_CHANGE_SPEED"
})

export const doGripper = (state: State): ACTION => ({
    type: "DO_GRIPPER"
})

export const doParachute = (state: State): ACTION => ({
    type: "DO_PARACHUTE"
})

export const doSetCamTriggDist = (state: State): ACTION => ({
    type: "DO_SET_CAM_TRIGG_DIST"
})

export const doSetRelay = (state: State): ACTION => ({
    type: "DO_SET_RELAY"
})

export const doRepeatRelay = (state: State): ACTION => ({
    type: "DO_REPEAT_RELAY"
})

export const doSetServo = (state: State): ACTION => ({
    type: "DO_SET_SERVO"
})

export const doRepeatServo = (state: State): ACTION => ({
    type: "DO_REPEAT_SERVO"
})

export const doDigicamConfigure = (state: State): ACTION => ({
    type: "DO_DIGICAM_CONFIGURE"
})

export const doDigicamControl = (state: State): ACTION => ({
    type: "DO_DIGICAM_CONTROL"
})

export const doMountControl = (state: State): ACTION => ({
    type: "DO_MOUNT_CONTROL"
})