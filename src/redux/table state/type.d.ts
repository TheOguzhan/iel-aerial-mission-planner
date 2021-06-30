interface IState {
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    latRequired?: Boolean = true,
    longRequired?: Boolean = true,
    altRequired?: Boolean = true,
    latName?: String,
    longName?: String,
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