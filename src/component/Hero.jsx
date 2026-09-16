function Hero({ title, subtitle }) {
    return (
        <section className="hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <img src="/image/eren.jpg" alt="foto profil" className="profile-photo" />
        </section>
    );
}

export default Hero;