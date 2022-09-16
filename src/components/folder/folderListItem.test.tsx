import ReactDOM from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { act } from "react-dom/test-utils";
import { FolderListItem } from "./folderListItem";

describe("#FolderListItem", () => {
    let container: HTMLElement | null = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        document.body.removeChild(container as Element);
        container?.remove();
        container = null;
    });

    it("if empty name given, throw error", () => {
        const err = console.error;
        console.error = jest.fn();
        expect(() => {
            act(() => {
                ReactDOM.createRoot(container as Element).render(
                    <MemoryRouter><FolderListItem
                        name=""
                        editUrl=""
                        onDeleteClicked={() => { }}
                    /></MemoryRouter>
                );
            })
        }).toThrow("name is empty");
        console.error = err;
    });

    // this should be separate by overflow or not.
    it("Name is too long", () => {
        let longName = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
            + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        act(() => {
            ReactDOM.createRoot(container as Element).render(
                <MemoryRouter><FolderListItem
                    name={longName}
                    editUrl="/test"
                    onDeleteClicked={() => { }}
                /></MemoryRouter>
            );
        });
        expect(container?.querySelector("#FolderListItemName")?.textContent).toBe(longName)
    });

    it("set correct edit url", () => {
        const url = "/test"
        act(() => {
            ReactDOM.createRoot(container as Element).render(
                <MemoryRouter><FolderListItem
                    name="test"
                    editUrl={url}
                    onDeleteClicked={() => { }}
                /></MemoryRouter>
            );
        });
        expect(container?.querySelector("#FolderListItemEdit a")?.getAttribute("href")).toBe(url)
    });

    it("if edit url is blank error", () => {
        const err = console.error;
        console.error = jest.fn;
        const url = ""
        expect(() => {
            act(() => {
                ReactDOM.createRoot(container as Element).render(
                    <MemoryRouter><FolderListItem
                        name="test"
                        editUrl={url}
                        onDeleteClicked={() => { }}
                    /></MemoryRouter>
                );
            })
        }).toThrow("edit url is empty");
        console.error = err;
    });

    it("on deleted clicked handler was called?", () => {
        let placeHolder = "";
        act(() => {
            ReactDOM.createRoot(container as Element).render(
                <MemoryRouter><FolderListItem
                    name="test"
                    editUrl="/test"
                    onDeleteClicked={() => { placeHolder = "success" }}
                /></MemoryRouter>
            );
        });
        expect(placeHolder).toBe("");

        const button = container?.querySelector("#FolderListItemDelete")
        act(() => {
            button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        expect(placeHolder).toBe("success");
    });
});

export { };