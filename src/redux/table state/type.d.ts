type State = {
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    altRequired?: Boolean,
    latName?: String,
    longName?: String,
}



type AllState = {
    state: State[]
}


type StateAction = {
    type: String
}

type DispatchType = (args: StateAction) => StateAction