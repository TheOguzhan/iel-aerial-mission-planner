interface IState {
    p1: String,
    p1State: Boolean,
    p2: String,
    p2State: Boolean,
    p3: String,
    p3State: Boolean,
    p4: String,
    p4State: Boolean,
    latRequired?: Boolean = true,
    longRequired?: Boolean = true,
    altRequired?: Boolean = true,
    latModified?: Boolean = false,
    longModified?: Boolean = false,
    latName?: String,
    longName?: String,
}

type State = {
    state: State
}

type StateAction = {
    type: String
}

type DispatchType = (args: StateAction) => StateAction