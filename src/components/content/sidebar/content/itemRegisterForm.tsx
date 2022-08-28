import { AiOutlineCheck } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

function ItemRegisterForm(): JSX.Element {
    const mode = useSelector((state: any) => state.SidebarModeReducer.mode)
    if (mode === "default") {
        return <></>
    }

    return (
        <div>
            <TextInputArea />
            <RegisterButton />
        </div>
    );
}

function TextInputArea(): JSX.Element {
    return (
        <input id="newItem" className="indent-2 w-10/12 caret-blue-500 outline-none" type="text"></input>
    );
}

function findTextInputArea(): HTMLInputElement {
    return document.getElementById("newItem") as HTMLInputElement;
}

function RegisterButton(): JSX.Element {
    const items = useSelector((state: any) => state.SidebarItemsReducer.items)
    const dispatch = useDispatch();

    const handleClick = () => {
        const newItem: string = findTextInputArea().value;
        const duplicates = items.includes(newItem);
        if (duplicates) {
            dispatch({ type: "addWarningMessage", message: "既に同名のアイテムがあります" })
            return;
        }

        const isBlank = [null, undefined, ""].includes(newItem);
        if (isBlank) {
            dispatch({ type: "addWarningMessage", message: "空欄です" })
            return;
        }

        dispatch({ type: "removeWarningMessage", message: "" })
        dispatch({ type: "addItem", item: newItem })
        dispatch({ type: "default" })
    };

    return (
        <button onClick={handleClick}>
            <AiOutlineCheck className="inline text-white bg-gray-600 text-2xl align-top" />
        </button>
    );
}

export default ItemRegisterForm;