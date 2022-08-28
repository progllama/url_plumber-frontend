import { useSelector, useDispatch } from "react-redux";

function Warning(): JSX.Element {
    const message = useSelector((state: any) => state.Warning.message);
    const dispatch = useDispatch();
    const isMessageEmpty = message === "";

    if (isMessageEmpty) {
        return (
            <></>
        );
    }

    const handleClick = () => {
        dispatch({ type: "removeWarning", message: "" })
    };

    return (
        <div className="w-full absolute bottom-10">
            <div onClick={handleClick} className="w-11/12 m-auto text-center bg-gray-900 text-white text-2xl">
                {message}
            </div>
        </div>
    )
}

export default Warning;