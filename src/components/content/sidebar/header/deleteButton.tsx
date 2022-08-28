import { BsTrash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Button from "./button"

function DeleteButton(): JSX.Element {
    const clickHandler = useClickHandler();

    return (
        <Button onClick={clickHandler}>
            <Icon />
        </Button>
    )
}

function useClickHandler() {
    const selectedItems = useSelector((state: any) => state.SidebarSelectedItemsReducer.items);
    const dispatch = useDispatch();

    return () => {
        for (let item of selectedItems) {
            dispatch({ type: "removeSelectedItem", item: item })
            dispatch({ type: "removeItem", item: item })
        }
    }
}

function Icon() {
    return <BsTrash className="p-1 inline text-2xl border-solid  text-white w-8 h-9" />;
}

export default DeleteButton;