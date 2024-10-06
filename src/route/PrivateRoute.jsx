import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../providers/userProvider";

function PrivateRoute({children}) {
    const { user,loading } = useContext(UserContext);
    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"/>
}

export default PrivateRoute
