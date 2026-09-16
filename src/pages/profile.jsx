import { useAuth } from "../context/Authcontext";

function Profile() {
    const { user } = useAuth();
    return (
        <section className="profile">
            <h2>Profil Saya</h2>
            <p>Nama: {user.name}</p>
            <p>email: {user.email}</p>
        </section>
    );
    
}

export default Profile;