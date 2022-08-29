import { Middleware } from 'redux';

export const BackupRecorder: Middleware = api => next => action => {
    next(action);
    localStorage.setItem("folders", JSON.stringify(api.getState().Folder.items))
    localStorage.setItem("links", JSON.stringify(api.getState().Link.items))
};