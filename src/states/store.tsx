import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";
import { BackupRecorder } from "./stateStorage";

const Store = getNewState();

function getNewState() {
    const storageData = localStorage.getItem("state");

    // データの保存に失敗した場合に"object"が保存されるので復元時にobjectは必要なstateのメンバーがないためエラーとなる。
    // そのためエラーが起きたときには全てのデータが消された状態となる。
    try {
        if (!!storageData) {
            const preloadedState = JSON.parse(storageData);

            return configureStore({
                reducer: Reducer,
                middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BackupRecorder),
                preloadedState,
            });
        } else {
            return configureStore({
                reducer: Reducer,
                middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BackupRecorder),
            });
        }
    } catch (e) {
        console.log(e);
        return configureStore({
            reducer: Reducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BackupRecorder),
        });
    }
}

export default Store;