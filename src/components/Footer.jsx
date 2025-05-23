const Footer = () => {
    return (
        <div className="bg-white py-8">
            <div className="text-center my-10 border-b py-5">
                <h2 className="text-3xl font-bold mb-4">Gadget Heaven</h2>
                <p className="text-xl">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="max-w-7xl mx-auto text-center">
                <footer className="footer place-items-center p-10 text-base-content">
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;