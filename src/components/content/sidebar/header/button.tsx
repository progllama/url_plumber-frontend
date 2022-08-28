import { ReactNode } from 'react';

function Button(props: Props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    );
}

type Props = {
    onClick: () => void
    children: ReactNode
}

export default Button