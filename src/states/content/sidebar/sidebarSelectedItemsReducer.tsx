
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

function SidebarSelectedItemsReducer(state = initialState, action: Action) {
    switch (action.type) {
        case "addSelectedItem":
            return {
                ...state,
                items: [...state.items, action.item]
            }
        case "removeSelectedItem":
            return {
                ...state,
                items: state.items.filter((item) => item !== action.item)
            }
        default:
            return state;
    }

}

export default SidebarSelectedItemsReducer;