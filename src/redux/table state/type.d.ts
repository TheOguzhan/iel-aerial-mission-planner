declare type State = {
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    altRequired?: Boolean,
    latName?: String,
    longName?: String,
}



declare type AllState = {
    state: State[]
}


declare type StateAction = {
    type: String
}

declare type DispatchType = (args: StateAction) => StateAction