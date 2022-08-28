function Header(): JSX.Element {
    const width = "w-full";
    const height = "h-full";
    const bg = "bg-gray-800";
    const flex = "flex";
    const style = [width, height, bg, flex].join(" ");

    return (
        <div className={style}>
            <HeaderItems />
        </div>
    );
}

function HeaderItems(): JSX.Element {
    // heightを設定するとflexで中央寄せできないので設定していない。
    const width = "w-11/12";
    const margin = "m-auto";
    const style = [width, margin].join(" ");

    return (
        <div className={style}>
            <Logo />
        </div>
    );
}

function Logo(): JSX.Element {
    const font = "text-4xl text-white font-bold";
    const style = [font].join(" ");
    return (
        <div className={style} >
            Url🔧Plumber
        </div>
    )
}

export default Header;