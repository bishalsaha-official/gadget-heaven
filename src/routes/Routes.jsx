import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Products from "../components/Products";

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
            }
        ]
    }
]);

export default routes;