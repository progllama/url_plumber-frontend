
type State = {
    item: {
        [tag: string]: {
            title: string,
            link: string,
        }[]
    }
}

type Action = {
    type: string,
    item: {
        tag: string
        value: {
            title: string,
            link: string,
        }
    },
}

const initialState: State = {
    item: {}
}

function MainItems(state = initialState, action: Action) {
    switch (action.type) {
        case "setMainItem":
            let current = { ...state.item };
            if (current[action.item.tag] == null) {
                current[action.item.tag] = [action.item.value];
            } else {
                current[action.item.tag] = [...current[action.item.tag], action.item.value];
            }
            return {
                ...state,
                item: current,
            }
        default:
            return state;
    }

}

export default MainItems;