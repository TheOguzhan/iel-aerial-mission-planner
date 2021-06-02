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

type CommandType = {
    Command: String,
    p1: Boolean,
    p2: Boolean,
    p3: Boolean,
    p4: Boolean,
    p1Payload?: String = Number(0).toFixed(8),
    p2Payload?: String = Number(0).toFixed(8),
    p3Payload?: String = Number(0).toFixed(8),
    p4Payload?: String = Number(0).toFixed(8),
    p1Name?: String,
    p2Name?: String,
    p3Name?: String,
    p4Name?: String,
    latRequired: Boolean,
    longRequired: Boolean,
    altRequired: Boolean,
    latPayload?: String = Number(0).toFixed(8),
    longPayload?: String = Number(0).toFixed(8),
    altPayload?: String = Number(100).toFixed(8),
    payload: Number
}

type Center = {
    lat: Number,
    lng: Number
}

type Path = {
    lat: Number,
    lng: Number
}