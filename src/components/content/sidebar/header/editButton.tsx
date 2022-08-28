import { AiOutlineEdit } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

function EditButton(): JSX.Element {
    const selectedItems = useSelector((state: any) => state.SidebarSelectedItemsReducer.items);
    const dispatch = useDispatch();

    const handleClick = () => {

    }
    return (
        <button onClick={handleClick}>
            <AiOutlineEdit className="p-1 inline text-2xl border-solid  text-white w-8 h-9" />
        </button>
    )
}

export default EditButton;