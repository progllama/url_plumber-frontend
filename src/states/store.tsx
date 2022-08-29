import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./reducer";
import { BackupRecorder } from "./stateStorage";

const Store = getNewState();

function getNewState() {
    const folders = JSON.parse(localStorage.getItem("folders") as string);
    const links = JSON.parse(localStorage.getItem("links") as string);
    const preloaded = {
        Folder: {
            items: folders ?? []
        },
        Link: {
            items: links ?? []
        }
    }
    return configureStore({
        reducer: Reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BackupRecorder),
        preloadedState: preloaded,
    });
}

export default Store;