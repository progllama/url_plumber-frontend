import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

function Redirect({ path }: { path: string }) {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(path)
    });
    return (<div>Redirecting...</div>)
}
export { Redirect }