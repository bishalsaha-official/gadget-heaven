import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus } from 'react-icons/fa';
import { MdFavorite } from "react-icons/md";
import { addItem } from "../utility";

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        const findData = data.find(p => p.product_id === parseInt(id))
        setItems(findData)
    }, [data, id])

    const { product_title, product_image, price, description, specification, rating } = items;
    
    const handleAdd = item =>{
        addItem(item)
    }

    return (
        <div>
            <div className="bg-purple-600 pt-16 pb-60 text-center">
                <h2 className="text-5xl text-white font-bold mb-5">Product Details</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-4xl mx-auto -mt-40 rounded-lg bg-white border">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product_image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{product_title}</h1>
                        <p className="text-2xl">Price: ${price}</p>
                        <p className="py-6">{description}</p>
                        <p className="font-bold">Specification</p>
                        <p>{specification}</p>
                        <p className="font-bold">Rating: {rating}</p>
                        <div>
                            <button onClick={()=> handleAdd(items)} className="btn bg-purple-600 text-white font-bold mt-8 mr-4">Add To Cart <FaCartPlus></FaCartPlus></button>
                            <button className="btn bg-white text-purple-600 border-purple-600 rounded-full font-bold "><MdFavorite></MdFavorite></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;