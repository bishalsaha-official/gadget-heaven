import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Products = () => {
    const data = useLoaderData()
    const {categoryId} = useParams()
    console.log(categoryId)
    const [products, setProducts] = useState([])
    useEffect(()=>{
        if(categoryId){
            const filterData = [...data].filter(item => item.category === categoryId)
            setProducts(filterData)
        } else{
            setProducts(data)
        }
    },[categoryId, data])
    console.log(products)
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;