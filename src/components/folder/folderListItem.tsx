import { FolderListItemProps } from './folderListItem.d';
import { Link } from 'react-router-dom'

/**
* ```name``` does not allowed empty.
* ```editUrl``` does not allowed empty.
*/
function FolderListItem(props: FolderListItemProps): JSX.Element {
    if (props.name === "") {
        throw new Error("name is empty");
    }

    if (props.editUrl === "") {
        throw new Error("edit url is empty");
    }

    return (
        <div id="FolderListItem">
            <div id="FolderListItemName">
                {props.name}
            </div>
            <div id="FolderListItemEdit">
                <Link to={props.editUrl}>Edit</Link>
            </div>
            <div onClick={props.onDeleteClicked} id="FolderListItemDelete">
                Delete
            </div>
        </div>
    );
}

export { FolderListItem };