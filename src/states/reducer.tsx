import { combineReducers } from "redux";
import SidebarModeReducer from "./content/sidebar/sidebarModeReducer"
import SidebarItemsReducer from "./content/sidebar/sidebarItemsReducer";
import SidebarItemRegisterWarningMessageReducer from "./content/sidebar/sidebarItemRegisterWarningMessageReducer";
import SidebarSelectedItemsReducer from "./content/sidebar/sidebarSelectedItemsReducer";
import Warning from "./content/utility/warning";
import CurrentItem from "./content/main/currentItem";
import MainItems from "./content/main/mainItems";

const Reducer = combineReducers({
    SidebarModeReducer,
    SidebarItemsReducer,
    SidebarItemRegisterWarningMessageReducer,
    SidebarSelectedItemsReducer,
    Warning,
    CurrentItem,
    MainItems,
});

export default Reducer;