
type State = {
    message: string,
}

type Action = {
    type: string,
    message: string,
}

const initialState: State = {
    message: ""
}

function SidebarItemRegisterWarningMessageReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case "addWarningMessage":
            return {
                ...state,
                message: action.message
            }
        case "removeWarningMessage":
            return {
                ...state,
                message: "",
            }
        default:
            return state;
    }
}

export default SidebarItemRegisterWarningMessageReducer;