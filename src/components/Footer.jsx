import { Link } from "react-router-dom";

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
                        <header className="footer-title">Product Support</header>
                        <Link className="link link-hover">Order Tracking</Link>
                        <Link className="link link-hover">Shipping & Delivery</Link>
                        <Link className="link link-hover">Returns</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;