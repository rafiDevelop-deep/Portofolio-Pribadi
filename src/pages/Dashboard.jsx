import { useAuth } from "../context/Authcontext";

function Dashboard() {
    const { user } = useAuth();
    return (
        <section className="Dashboard">
            <h2>Dashboard</h2>
            <p>Selamat Datang Kembali, {user.name}</p>
            <p>ini adalah halaman khusus yang hanya bisa diakses setelah login.</p>
        </section>
    );
}

export default Dashboard;