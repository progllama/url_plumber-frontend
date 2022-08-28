import { Middleware } from 'redux';

export const BackupRecorder: Middleware = api => next => action => {
    next(action);
    localStorage.setItem("state", JSON.stringify(api.getState()))
};