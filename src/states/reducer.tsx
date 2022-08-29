import { useSelector, useDispatch } from "react-redux";
import { combineReducers } from "redux";
import { FolderModel } from "../models/folder";
import { LinkModel } from "../models/linkModel";

const Reducer = combineReducers({
    Folder,
    Link,
});

type FolderState = {
    items: FolderModel[]
}

function Folder(state: FolderState = { items: [] }, action: { type: string, folder: FolderModel }) {
    switch (action.type) {
        case "CREATE_FOLDER":
            return {
                ...state,
                items: [...state.items, action.folder] as Array<FolderModel>,
            };
        case "DELETE_FOLDER":
            const items = state.items.filter((item) => item.name !== action.folder.name)
            return {
                ...state,
                items: items,
            }
        default:
            return state;
    }
}

function useFolder() {
    const folders = useSelector((state: any) => state.Folder.items)
    const dispatch = useDispatch()

    const createFolder = (f: FolderModel) => {
        dispatch({ type: "CREATE_FOLDER", folder: f });
    }

    const updateFolder = (old: FolderModel, latest: FolderModel) => {
        dispatch({ type: "DELETE_FOLDER", folder: old });
        dispatch({ type: "CREATE_FOLDER", folder: latest });
    }

    const deleteFolder = (f: FolderModel) => {
        dispatch({ type: "DELETE_FOLDER", folder: f });
    }

    return { folders, createFolder, updateFolder, deleteFolder }
}


type LinkState = {
    items: LinkModel[]
}

function Link(state: LinkState = { items: [] }, action: { type: string, link: LinkModel }) {
    switch (action.type) {
        case "CREATE_LINK":
            return {
                ...state,
                items: [...state.items, action.link]
            };
        case "DELETE_LINK":
            const items = state.items.filter((item) => item.name !== action.link.name)
            return {
                ...state,
                items: items,
            }
        default:
            return state;
    }
}

function useLink() {
    const links = useSelector((state: any) => state.Link.items) as Array<LinkModel>;
    const dispatch = useDispatch()

    const createLink = (f: LinkModel) => {
        dispatch({ type: "CREATE_LINK", link: f });
    }

    const updateLink = (old: LinkModel, latest: LinkModel) => {
        dispatch({ type: "DELETE_LINK", link: old });
        dispatch({ type: "CREATE_LINK", link: latest });
    }

    const deleteLink = (f: LinkModel) => {
        dispatch({ type: "DELETE_LINK", link: f });
    }

    return { links, createLink, updateLink, deleteLink }
}

export { Reducer, useFolder, useLink };