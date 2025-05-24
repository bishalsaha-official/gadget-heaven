import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = () => {
    const data = useLoaderData()
    const param = useParams()
    const [products, setProducts] = useState([])
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                data.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;