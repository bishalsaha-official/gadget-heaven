import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { product_id, product_title, product_image, price } = product;
    return (
        <div className='bg-white border p-5 rounded-xl'>
            <img className='w-full h-60' src={product_image} alt="" />
            <h2 className='text-2xl my-5 font-bold'>{product_title}</h2>
            <p className='text-xl mb-4'>Price: $ {price}</p>
            <Link to={`/product/${product_id}`} className='btn bg-white text-purple-600 border-purple-600'>View Details</Link>
        </div>
    );
};

export default ProductCard;