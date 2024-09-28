
import React from 'react';

interface Product {
    name: string;
    category: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="productItem container row">
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="product">
                        <h3>Name: {product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
