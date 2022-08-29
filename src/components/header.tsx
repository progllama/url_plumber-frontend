import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="h-full w-full flex">
            <div className="w-11/12 m-auto p-5 text-4xl font-bold">
                <Link to="/">URL🔧Plumber</Link>
            </div>
        </div>
    );
}
export { Header };