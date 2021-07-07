

export const createState = (parameter: Exclude<State, 'altRequired' | 'latName' | 'longName'>) => {
    return {
        altRequired: true,
        latName: "Latitude",
        longName: "Longitude",
        ...parameter
    }
}