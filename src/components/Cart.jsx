import { useEffect, useState } from "react";
import { getItem, removeItem } from "../utility";
import CartItem from "./CartItem";

const Cart = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    useEffect(()=>{
        const data = getItem()
        setItems(data)
    },[])
    
    const handleRemove = id => {
        removeItem(id)
        const data = getItem()
        setItems(data)
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h2 className="text-2xl font-bold">Cart</h2>
                <div>
                    <span className="text-xl mr-5 font-bold">Total cost: {count}</span>
                    <button className="text-xl btn rounded-full mr-5 bg-white border-purple-600 text-purple-600">Short By Price</button>
                    <button className="text-xl btn rounded-full bg-purple-600 text-white">Purchase</button>
                </div>
            </div>
            <div className="max-w-4xl mx-auto mt-10">
                {
                    items.map(item => <CartItem key={item.product_id} item={item} handleRemove={handleRemove}></CartItem> )
                }
            </div>
        </div>
    );
};

export default Cart;