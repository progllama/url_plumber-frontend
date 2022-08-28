
type State = {
    mode: string
}

type Action = {
    type: string,
}

const initialState: State = {
    mode: "default"
}

function SidebarModeReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "default":
            return {
                ...state,
                mode: "default"
            }
        case "add":
            return {
                ...state,
                mode: "add"
            }
        default:
            return state;
    }

}

export default SidebarModeReducer;