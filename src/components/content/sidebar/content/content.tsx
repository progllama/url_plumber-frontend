import { useState } from 'react';
import ItemRegisterForm from "./itemRegisterForm";
import { RiArrowDropDownLine, RiArrowDropRightLine } from 'react-icons/ri'
import { useSelector, useDispatch } from 'react-redux';

function Content(): JSX.Element {
    return (
        <div className="w-auto m-2">
            <ItemRegisterForm />
            <Warning />
            <ItemList />
        </div>
    );
}

function ItemList(): JSX.Element {
    const items = useSelector((state: any) => state.SidebarItemsReducer.items)
    const jsxItems = items.map((item: string) => <ListItem key={Math.random()} item={item} />)
    return (
        <div className="text-white text-xl">
            {jsxItems}
        </div>
    )
}

function ListItem({ item }: { item: string }): JSX.Element {
    // const [open, setOpen] = useState(false);
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        setActive(!active)
        if (active) {
            dispatch({ type: "removeSelectedItem", item: item })
        } else {
            dispatch({ type: "addSelectedItem", item: item })
        }
    }

    let style = "mb-3 flex cursor-pointer "
    if (active) {
        style += "text-white"
    } else {
        style += "text-gray-600"
    }
    return (
        <div className={style}>
            <div onClick={handleClick} className="flex-1 w-auto ml-5">
                {item}
            </div>
            {/* <div onClick={() => setOpen(!open)} className="flex-grow-0 flex-shrink-0">
                {open ? <RiArrowDropDownLine className="h-full" /> : <RiArrowDropRightLine className="h-full" />}
            </div> */}
        </div >
    );
}

function Warning(): JSX.Element {
    const message = useSelector((state: any) => state.SidebarItemRegisterWarningMessageReducer.message)
    if (message === "") {
        return (
            <></>
        )
    }

    return (
        <div className="text-sm bg-white rounded-md mt-2 border-orange-300 text-red-500 border-solid border-2 text-center">
            {message}
        </div>
    )
}

export default Content;