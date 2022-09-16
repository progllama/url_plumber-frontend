import { FolderListItem } from "./folderListItem"
import path from "path"

/**
 * フォルダーのリスト
 */
function FolderList(): JSX.Element {
    // フォルダーの取得
    const folders = getFolders();

    // フォルダーのデータから子要素の作成
    // キーはどう決める?
    const items: JSX.Element[] = folders.map((f: string, i: number) =>
        buildItem(f, i.toString())
    );

    // itemsをdivでラップして返す。
    return (
        <div>
            {items}
        </div>
    );
}

/**
 * フォルダーの一覧を取得
 */
function getFolders(): string[] {
    return [
        "item1",
        "item2",
        "item3",
    ];
}

/**
 * フォルダーデータからフォルダーリストのアイテムを作成
 */
function buildItem(f: string, k: string): JSX.Element {
    return (<FolderListItem
        key={k}
        name={f}
        editUrl={buildEditUrl(f)}
        onDeleteClicked={() => { }}
    />);
}

/**
 * 編集画面のURLを作成
 */
function buildEditUrl(f: string) {
    const base = "/folders"
    const url = path.join(base, f, "edit")
    return url
}

export { FolderList };