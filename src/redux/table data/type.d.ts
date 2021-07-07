declare interface IData {
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
declare type DataState = {
    data: IData[]
}

declare type DataAction = {
    type: String,
    data: IData
}

declare type DispatchType = (args: DataAction) => DataAction