import { useSelector } from "react-redux";
import RegisterForm from "./registerForm";

function Main(): JSX.Element {
    const item = useSelector((state: any) => state.CurrentItem.item);
    const items = useSelector((state: any) => state.MainItems.item);
    const currentItems = items[item];
    return (
        <div className="block h-full w-full bg-gray-800 overflow-y-scroll">
            <div className="w-11/12 h-full m-auto">
                <Header />
                <RegisterForm />
                <div className="text-white mt-10">
                    <Table items={currentItems} />
                </div>
            </div>
        </div>
    );
}

function Table(items: any): JSX.Element {
    if (items && items.items && items.items.length > 0) {
        const rows = items.items.map((item: any) => <tr key={Math.random()} className="even:bg-gray-600 odd:bg-gray-700">
            <td className="h-10 w-4/12 border-r-4 border-solid border-gray-800 pl-8">
                {item.title}
            </td>
            <td className="pl-8">
                {item.link}
            </td>
        </tr>)
        return (
            <table className="w-full">
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
    return <></>;
}

function Header(): JSX.Element {
    const currentItem = useSelector((state: any) => state.CurrentItem.item);
    return (
        <div className="flex-1 text-5xl text-white p-5">
            {currentItem}
        </div>
    );
}

export default Main;

