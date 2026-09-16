import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function UserDropdown() {
    const [ open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return() => {
            document.removeEventListener("mouseDown", handleClickOutside);
    };
}, []);

function goTo(path) {
    setOpen(false);
    navigate(path);
}

function handleLogout() {
    logout();
    setOpen(false);
    navigate("/");
}

return (
    <div className="user-dropdown" rev={menuRef}>
        <button type="button" className="user-dropdown-toggle" onClick={() => setOpen(!open)}>
            {user.name}
        </button>
        {open && (
            <ul className="user-dropddown-menu">
                <li>
                    <button type="button" onClick={() => goTo("/dashboard")}>
                        Dashboard</button> 
                </li>
                <li>
                    <button type="button" onClick={() => goTo("/profile")}>
                        Profile
                    </button>
                </li>
                <li>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </li>
            </ul>
        )}
    </div>
);
}

export default UserDropdown;