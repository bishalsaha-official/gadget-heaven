import { MdDelete } from "react-icons/md";

const CartItem = ({item, handleRemove}) => {
    const {product_title, description, product_image, price} = item;
    
    return (
        <div className="flex justify-center items-center gap-8 bg-white p-10 rounded-2xl border mb-5">
            <img src={product_image} className="max-w-52" alt="" />
            <div>
                <h2 className="text-2xl font-bold">{product_title}</h2>
                <p className="text-xl">{description}</p>
                <p className="text-xl">Price: $ {price}</p>
            </div>
            <div>
                <button onClick={()=> handleRemove(item)} className="text-3xl"><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

export default CartItem;