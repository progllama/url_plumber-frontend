import { useSelector, useDispatch } from "react-redux";

function RegisterForm(): JSX.Element {
    const currentItem = useSelector((state: any) => state.CurrentItem.item)
    const dispatch = useDispatch();

    const handleClick = () => {
        const title = document.getElementById("title") as HTMLInputElement;
        const link = document.getElementById("link") as HTMLInputElement;

        dispatch({ type: "setMainItem", item: { tag: currentItem, value: { title: title.value, link: link.value } } })
    }

    return (
        <div>
            <input id="title" className="p-2 border-r-solid border-r-2" type="text" placeholder="title" />
            <input id="link" className="p-2" type="text" placeholder="link" />
            <button onClick={handleClick} className="bg-gray-700 text-white p-2">登録</button>
        </div>
    );
}

export default RegisterForm;