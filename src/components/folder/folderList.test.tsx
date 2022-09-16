import { FolderList } from "./folderList";
import { FolderListItemProps } from "./folderListItem.d";
import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";

const mockItem = jest.fn();
jest.mock("./folderListItem", () => ({
    FolderListItem: (props: FolderListItemProps) => {
        mockItem(props);
        return <div />;
    }
})
);

describe("#FolderList", () => {

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

    it("props passing", () => {
        const err = console.error;
        console.error = () => { };
        act(() => {
            ReactDOM.createRoot(container as Element).render(
                <FolderList />
            );
        });
        const args: ComparableProps[]
            = (mockItem.mock.calls as ComparableProps[][]).map(arg => (
                { name: arg[0].name, editUrl: arg[0].editUrl }
            ))

        expect(args).toEqual([
            {
                "editUrl": "/folders/item1/edit",
                "name": "item1",
            },
            {
                "editUrl": "/folders/item2/edit",
                "name": "item2",
            },
            {
                "editUrl": "/folders/item3/edit",
                "name": "item3",
            },
        ]);

        const callback: (() => void)[]
            = (mockItem.mock.calls as FolderListItemProps[][]).map(arg => (
                arg[0].onDeleteClicked
            ))

        callback[0]();

        console.error = err;
    });
})

// function cant compare expect.
type ComparableProps = {
    name: string;
    editUrl: string;
}

[
    {
        "editUrl": "/test",
        "name": "item1",
    },
    {
        "editUrl": "/test",
        "name": "item2",
    },
    {
        "editUrl": "/test",
        "name": "item3",
    },
]

export { };