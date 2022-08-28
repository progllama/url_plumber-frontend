import { ReactNode } from 'react';
import Header from "./header/header";
import Content from "./content/content"

function Sidebar(): JSX.Element {
    return (
        <div className="h-full w-full overflow-hidden bg-gray-800 flex flex-col">
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <ContentContainer>
                <Content />
            </ContentContainer>
        </div>
    )
}

function HeaderContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    return (
        <div className="w-full h-auto flex-grow-0 flex-shrink-0">
            {children}
        </div>
    )
}

function ContentContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    return (
        <div className="w-full h-0 flex-grow flex-shrink">
            {children}
        </div>
    )
}

export default Sidebar;