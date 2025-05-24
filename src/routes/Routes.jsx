import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Products from "../components/Products";
import Dashboard from "../pages/Dashboard";
import Statistic from "../pages/Statistic";
import ProductDetails from "../components/ProductDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path: '/',
                        element: <Products></Products>,
                        loader: () => fetch('../products.json')
                    },
                    {
                        path: '/category/:categoryId',
                        element: <Products></Products>,
                        loader: () => fetch('../products.json')
                    }
                ]
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/statistic',
                element: <Statistic></Statistic>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('../products.json') 
            }
        ]
    },

]);

export default routes;