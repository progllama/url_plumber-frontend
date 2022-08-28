import { RiAddLine } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

function AddButton(): JSX.Element {
    const mode = useSelector((state: any) => state.SidebarModeReducer.mode)
    const dispatch = useDispatch()
    // 押されたら現在のモードを変更。
    const handleClick = () => {
        let nextMode = getNextMode(mode);
        dispatch({ type: nextMode })
        dispatch({ type: "removeWarningMessage", message: "" })
    }

    return (
        <button onClick={handleClick}>
            <RiAddLine className="p-1 inline text-2xl border-solid text-white w-8 h-9" />
        </button>
    );
}

function getNextMode(currentMode: string) {
    if (currentMode === "default") {
        return "add"
    } else {
        return "default";
    }
}

export default AddButton;