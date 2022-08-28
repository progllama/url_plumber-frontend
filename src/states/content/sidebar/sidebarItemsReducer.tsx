
type State = {
    items: string[]
}

type Action = {
    type: string,
    item: string,
}

const initialState: State = {
    items: [],
}

function SidebarItemsReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "addItem":
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case "removeItem":
            return {
                ...state,
                items: state.items.filter((item) => item !== action.item)
            }
        default:
            return state;
    }

}

export default SidebarItemsReducer;