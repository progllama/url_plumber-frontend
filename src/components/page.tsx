import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";

const BG_COLOR = "bg-gray-900";
const WIDTH = "w-screen";
const HEIGHT = "h-screen";

// 2段レイアウト
function Page() {
    return (
        <div className={`${BG_COLOR} ${WIDTH} ${HEIGHT} text-white flex flex-col`}>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </div>
    );
}

// 中身の要素に合わせて高さは変更
// 伸縮はしない
function HeaderContainer({ children }: { children: ReactNode }) {
    return (
        <div className="h-auto w-full flex-shrink-0 flex-grow-0">
            {children}
        </div>
    );
}

// 高さ = 画面の高さ - ヘッダの高さ
function ContentContainer({ children }: { children: ReactNode }) {
    return (
        <div className="h-0 w-full flex-1">
            {children}
        </div>
    );
}

export { Page };