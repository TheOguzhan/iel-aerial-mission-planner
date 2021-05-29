interface IData {
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
type DataState = {
    data: IData[]
}

type DataAction = {
    type: String,
    data: IData
}

type DispatchType = (args: DataAction) => DataAction