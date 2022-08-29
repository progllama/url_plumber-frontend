function Folders(): JSX.Element {
    return (
        <OuterContainer>
            <InnerContainer>

            </InnerContainer>
        </OuterContainer>
    );
}

function OuterContainer(props: Props): JSX.Element {
    return (
        <div className="w-full h-full">
            {props.children}
        </div>
    )
}

function InnerContainer(props: Props): JSX.Element {
    return (
        <div className="">
            {props.children}
        </div>
    )
}

interface Props {
    children?: React.ReactNode;
}

export { Folders };