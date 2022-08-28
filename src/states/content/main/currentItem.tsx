
type State = {
    item: string
}

type Action = {
    type: string,
    item: string,
}

const initialState: State = {
    item: ""
}

function CurrentItem(state = initialState, action: Action) {
    switch (action.type) {
        case "setCurrentItem":
            return {
                ...state,
                item: action.item,
            }
        default:
            return state;
    }

}

export default CurrentItem;