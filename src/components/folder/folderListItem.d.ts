
/**
 * @name アイテム名
 * @editUrl 編集画面へのリンク
 * @onDeleteClicked 削除のハンドラ
 */
interface FolderListItemProps {
    name: string;
    editUrl: string;
    onDeleteClicked: () => void;
}

export { FolderListItemProps };