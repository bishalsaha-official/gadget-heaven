import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div>
            <h2>{product.product_title}</h2>
            <button className='btn'>View Details</button>
        </div>
    );
};

export default ProductCard;