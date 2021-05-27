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

type Center = {
    lat: Number,
    lng: Number
}

type Path = {
    lat: Number,
    lng: Number
}