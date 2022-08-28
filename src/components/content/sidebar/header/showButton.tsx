import { BiShow } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

// サイドバーのモードをデフォルトに戻す。
function ShowButton(): JSX.Element {
    const selectedItems = useSelector((state: any) => state.SidebarSelectedItemsReducer.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        if (selectedItems.length <= 0) {
            dispatch({ type: "addWarning", message: "対象が選択されていません" })
            return;
        } else if (selectedItems.length > 1) {
            dispatch({ type: "addWarning", message: "2つ以上選択されています。" })
            return;
        }
        dispatch({ type: "setCurrentItem", item: selectedItems[0] });
    }

    return (
        <button onClick={handleClick}>
            <BiShow className="p-1 inline text-2xl border-solid text-white w-8 h-9" />
        </button>
    );
}

export default ShowButton;