import { Link as RRDLink, useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useLink } from '../states/reducer'

function Links() {
    const params = useParams();
    const { links } = useLink()
    return (
        <div className="h-full w-11/12 m-auto flex flex-col">
            <div className="h-auto w-full flex">
                <div className="text-3xl text-bold flex-1">Links</div>
                <RRDLink className="self-end" to={`/folders/${params.folderName}/links/new`}>追加</RRDLink>
            </div>
            <List items={links.filter(v => v.folder === params.folderName)} />
        </div>
    )
}

function List({ items }: { items: Array<{ folder: string, name: string, url: string }> }) {
    const links = items.map(item =>
        <ListItem key={Math.random()} item={item} />
    )

    return (
        <div>
            {links}
        </div>
    )
}

function ListItem({ item }: { item: { folder: string, name: string, url: string } }) {
    const { deleteLink } = useLink();
    const handleDelete = () => {
        deleteLink(item)
    }
    return (
        <div>
            <div className="odd:bg-gray-800 p-2 flex gap-5">
                <div className="flex-1">
                    <a target="blank" href={item.url}>{item.name}</a>
                </div>
                <div>
                    <RRDLink to={`/folders/${item.folder}/links/${item.name}/edit`}>編集</RRDLink>
                </div>
                <div onClick={handleDelete} className="cursor-pointer">
                    削除
                </div>
            </div>
        </div >
    );
}

function NewLink() {
    const [title, titleRecorder] = useInputRecorder();
    const [url, urlRecorder] = useInputRecorder();
    const params = useParams();
    const link = {
        folder: params.folderName || "",
        name: title,
        url: url,
    }
    const handler = useCreateHandler(link);

    return (
        <div className="h-full w-11/12 m-auto text-center">
            <div className="p-20">
                <div className="text-3xl m-3">Add new Link</div>
                <form>
                    <label className="block">Title</label>
                    <input className="text-black indent-2" type="text" onChange={titleRecorder} />
                    <label className="block">URL</label>
                    <input className="text-black indent-2" type="text" onChange={urlRecorder} />
                    <div className="block mt-5">
                        <button onClick={handler}>OK</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function useCreateHandler(link: { folder: string, name: string, url: string }) {
    const navigate = useNavigate();
    const params = useParams();
    const { createLink } = useLink();
    return () => {
        createLink(link)
        navigate(`/folders/${params.folderName}/links`)
    }
}

function useInputRecorder(): [string, (e: ChangeEvent<HTMLInputElement>) => void] {
    const [text, setText] = useState("");
    return [text, (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value || "")
    }]

}

function EditLink() {
    const [title, titleRecorder] = useInputRecorder();
    const [url, urlRecorder] = useInputRecorder();
    const params = useParams();
    const link = {
        folder: params.folderName || "",
        name: title,
        url: url,
    }
    const handler = useEditHandler(link);

    return (
        <div className="h-full w-11/12 m-auto text-center">
            <div className="p-20">
                <div className="text-3xl m-3">Add new Link</div>
                <form>
                    <label className="block">Title</label>
                    <input className="text-black indent-2" type="text" onChange={titleRecorder} />
                    <label className="block">URL</label>
                    <input className="text-black indent-2" type="text" onChange={urlRecorder} />
                    <div className="block mt-5">
                        <button onClick={handler}>OK</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

function useEditHandler(link: { folder: string, name: string, url: string }) {
    const navigate = useNavigate();
    const params = useParams();
    const { updateLink } = useLink();
    return () => {
        updateLink({ name: params.linkName || "", folder: "", url: "" }, link)
        navigate(`/folders/${link.folder}/links`)
    }
}

export { Links, NewLink, EditLink };