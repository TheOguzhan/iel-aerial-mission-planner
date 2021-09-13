declare type Data = {
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

declare type FrameObjectType = {
    [TERRAIN:  string]: Number,
    [ABSOLUTE: string]: Number,
    [RELATIVE: string]: Number
}

declare type CommandObject = {
    [Command: String]: CommandType
}


declare type CommandType = {
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

declare type Center = {
    lat: Number,
    lng: Number
}
declare type Path = {
    lat: Number,
    lng: Number
}