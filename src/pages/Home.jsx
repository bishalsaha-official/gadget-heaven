import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {
    const categories = useLoaderData()
    // console.log(categories)
    return (
        <div>
            <Banner></Banner>
            <Heading title="Explore Cutting-Edge Gadgets"></Heading>
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-[20%_80%] gap-8">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;