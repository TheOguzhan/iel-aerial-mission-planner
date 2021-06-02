type Data = {
    command:    String,
    p1:         String,
    p2:         String,
    p3:         String,
    p4:         String,
    lat:        String,
    long:       String,
    alt:        String,
    frame:      String
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
    p1Name: String |undefined,
    p2Name: String | undefined,
    p3Name: String | undefined,
    p4Name: String | undefined,
    latRequired: Boolean,
    longRequired: Boolean,
    
}

type Center = {
    lat: Number,
    lng: Number
}

type Path = {
    lat: Number,
    lng: Number
}