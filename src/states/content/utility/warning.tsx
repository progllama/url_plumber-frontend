
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

function Warning(state: State = initialState, action: Action) {
    switch (action.type) {
        case "addWarning":
            return {
                ...state,
                message: action.message
            }
        case "removeWarning":
            return {
                ...state,
                message: "",
            }
        default:
            return state;
    }
}

export default Warning;