import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple-600 pt-16 pb-16 text-center">
                <h2 className="text-5xl text-white font-bold mb-5">Dashboard</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="mt-6">
                    <NavLink to="/dashboard/cart" className="btn rounded-full px-5 mr-5">Cart</NavLink>
                    <NavLink to="/dashboard/wishlist" className="btn rounded-full px-5">Wishlist</NavLink>
                </div>
            </div>
            <div className="mt-7">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;