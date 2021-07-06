type Data = {
    command: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    lat: String,
    long: String,
    alt: String,
    frame: String
}

type FrameObjectType = {
    [TERRAIN: String]: Number,
    [ABSOLUTE: String]: Number,
    [RELATIVE: String]: Number
}

type CommandObject = {
    [Command: String]: CommandType
}


// TODO: Refactor this like createState
type CommandType = {
    Command: String,
    p1: Boolean,
    p2: Boolean,
    p3: Boolean,
    p4: Boolean,
    p1Name?: String,
    p2Name?: String,
    p3Name?: String,
    p4Name?: String,
    latRequired?: Boolean = true,
    longRequired?: Boolean = true,
    altRequired?: Boolean = true,
    payload: Number,
    shown?: Boolean = true,
    spline?: Boolean = false,
    isolated?: Boolean = false,
    latModified?: Boolean = false,
    longModified?: Boolean = false,
    latName?: String,
    longName?: String,
}

type Center = {
    lat: Number,
    lng: Number
}

type Path = {
    lat: Number,
    lng: Number
}