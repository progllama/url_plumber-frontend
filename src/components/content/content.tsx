import { ReactNode } from "react";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main";

function Content(): JSX.Element {
    return (
        <div className="w-full h-full flex flex-col md:flex-row">
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <MainContainer>
                <Main />
            </MainContainer>
        </div>
    );
}

function SidebarContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    return (
        <div className="h-full w-64 flex-shrink-0 flex-grow-0">
            {children}
        </div>
    );
}

function MainContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    return (
        <div className="h-full w-0 flex-shrink flex-grow">
            {children}
        </div>
    );
}

export default Content;