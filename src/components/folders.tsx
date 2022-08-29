import { ChangeEvent, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFolder } from '../states/reducer'
import { Redirect } from './redirect'

function Folders() {
    return (
        <div className="h-full w-11/12 m-auto flex flex-col">
            <div className="h-auto w-full flex">
                <div className="text-3xl text-bold flex-1">Folders</div>
                <Link className="self-end" to={"/folders/new"}>追加</Link>
            </div>
            <List />
        </div>
    );
}

function List() {
    const { folders } = useFolder();
    const items = new Array(folders.length);
    for (let i = 0; i < folders.length; i++) {
        items[i] = <Item key={Math.random()} name={folders[i].name} />
    }
    return (
        <div className="h-full p-8 overflow-scroll">
            {items}
        </div>
    )
}

function Item({ name }: { name: string }) {
    const { deleteFolder } = useFolder();
    const handleClick = () => {
        deleteFolder({ name: name })
    }
    return (
        <div className="odd:bg-gray-800 p-2 flex gap-5">
            <div className="flex-1">
                <Link to={`/folders/${name}`}>{name}</Link>
            </div>
            <div>
                <Link to={`/folders/${name}/edit`}>編集</Link>
            </div>
            <div onClick={handleClick} className="cursor-pointer">
                削除
            </div>
        </div>);
}

function Folder() {
    const params = useParams()
    return <Redirect path={`/folders/${params.folderName}/links`} />
}

function NewFolder() {
    const { text, recorder } = useInputRecorder();
    const handler = useCreateHandler(text);

    return (
        <div className="h-full w-11/12 m-auto text-center">
            <div className="p-20">
                <div className="text-3xl m-3">Add new folder</div>
                <form>
                    <label className="block">Title</label>
                    <input className="text-black indent-2" type="text" onChange={recorder} />
                    <div className="block mt-5">
                        <button onClick={handler}>OK</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function useCreateHandler(text: string) {
    const navigate = useNavigate();
    const { createFolder } = useFolder();
    return () => {
        createFolder({ name: text })
        navigate("/folders")
    }
}

function useInputRecorder() {
    const [text, setText] = useState("");
    return {
        text, recorder: (e: ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value || "")
        }
    }
}

function EditFolder() {
    const { text, recorder } = useInputRecorder();
    const handler = useEditHandler(text);

    return (
        <div className="h-full w-11/12 m-auto text-center">
            <div className="p-20">
                <div className="text-3xl m-3">edit folder</div>
                <form>
                    <label className="block">Title</label>
                    <input className="text-black indent-2" type="text" onChange={recorder} />
                    <div className="block mt-5">
                        <button onClick={handler}>OK</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function useEditHandler(latest: string) {
    const navigate = useNavigate();
    const params = useParams();
    const { updateFolder } = useFolder();
    return () => {
        updateFolder({ name: params.folderName || "" }, { name: latest })
        navigate("/folders")
    }
}

export { Folders, Folder, NewFolder, EditFolder };