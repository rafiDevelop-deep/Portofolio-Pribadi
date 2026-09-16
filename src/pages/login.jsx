import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

function Login() {
    const [form, setForm] = useState({ email: "", password: ""});
    const [ error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirecTo = location.state?.from?.pathname || "/dashboard";

    function handleChange(e) {
        setForm({ ...form, [ e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        const success = login(form.email, form.password);
        if (success) {
         navigate(redirecTo, { replace: true });
        } else {
            setError("Email dan Password wajib diisi.");
        }
    }

    return (
        <section className="login">
            <h2>Masuk Ke akun</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input type="email" name="email" value={form.email} onChange={handleChange} />
                </label>
                <label>
                    Password
                    <input type="password" name="password" value={form.password}  onChange={handleChange}/>
                </label>
                <button type="submit">Masuk</button>
            </form>
            {error && <p className="error">{error}</p>}
        </section>
    );
}

export default Login;