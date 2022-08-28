import AddButton from "./newButton";
import ShowButton from "./showButton";
import EditButton from "./editButton";
import DeleteButton from "./deleteButton";


function Header(): JSX.Element {
    return (
        <div className="m-2 w-auto h-auto flex gap-2">
            <AddButton />
            <ShowButton />
            <EditButton />
            <DeleteButton />
        </div>
    );
}

export default Header;