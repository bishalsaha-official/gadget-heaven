import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;