import ReactDOM from 'react-dom/client';
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { Folders } from "./folders";
import { MemoryRouter } from "react-router-dom";

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

it("renders", () => {
    act(() => {
        ReactDOM.createRoot(container as Element).render(
            <MemoryRouter><Folders /></MemoryRouter>
        );
    });

    expect(
        pretty((container?.innerHTML as string))).
        toMatchSnapshot()
});