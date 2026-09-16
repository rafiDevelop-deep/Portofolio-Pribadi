import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function GuestRoute({ children }) {
    const {user} = useAuth();
    return user ? <navigate to="/dashboard" replace /> : children;
}

export default GuestRoute;