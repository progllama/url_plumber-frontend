import { ReactNode } from 'react';
import Header from "./header/header"
import Content from './content/content';
import Warning from './utility/warning'

function Page(): JSX.Element {
    const height = "h-full";
    const width = "w-full";
    const bg = "bg-slate-700"
    const flex = "flex flex-col"
    const style = [height, width, bg, flex].join(" ");

    return (
        <div className={style}>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <ContentContainer>
                <Content />
            </ContentContainer>
            <UtilityContainer>
                <Warning />
            </UtilityContainer>
        </ div>
    );
}

function HeaderContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    const height = "h-14";
    const width = "w-full";
    const flex = "flex-grow-0 flex-shrink-0";
    const style = [height, width, flex].join(" ");

    return (
        <div className={style}>
            {children}
        </div>
    );
}

function ContentContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    const height = "h-0";
    const width = "w-full";
    const flex = "flex-grow flex-shrink";
    const style = [height, width, flex].join(" ");

    return (
        <div className={style}>
            {children}
        </div>
    );
}

function UtilityContainer({ children }: {
    children?: ReactNode;
}): JSX.Element {
    return (
        <div className="w-0 h-0">
            {children}
        </div>
    )
}

export default Page;