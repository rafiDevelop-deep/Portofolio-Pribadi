function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>&copy; {year} Portofolio Saya. Seluruh Hak cipta dilindungi.</p>
        </footer>

    );
}

export default Footer;