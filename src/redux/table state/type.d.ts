interface IState {
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    altRequired?: Boolean = true,
    latName?: String = "Lat",
    longName?: String = "Long",
}

type State = {
    state: IState
}

type AllState = {
    state: State[]
}


type StateAction = {
    type: String
}

type DispatchType = (args: StateAction) => StateAction