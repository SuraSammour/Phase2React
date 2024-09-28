import React, { useState } from 'react';
import './styles.css';

const productsList = [
    { name: 'Smartphone', category: 'electronics', price: 299 },
    { name: 'Wireless Earbuds', category: 'electronics', price: 99 },
    { name: 'T-shirt', category: 'clothing', price: 29 },
    { name: 'Jeans', category: 'clothing', price: 49 },
    { name: 'Laptop', category: 'electronics', price: 899 },
    { name: 'Smartwatch', category: 'electronics', price: 199 },
    { name: 'Sweater', category: 'clothing', price: 39 },
    { name: 'Jacket', category: 'clothing', price: 79 },
    { name: 'Bluetooth Speaker', category: 'electronics', price: 129 },
    { name: 'Sneakers', category: 'clothing', price: 89 },
    { name: 'Tablet', category: 'electronics', price: 399 },
    { name: 'Backpack', category: 'clothing', price: 59 },
    { name: 'HD Monitor', category: 'electronics', price: 199 },
    { name: 'Dress', category: 'clothing', price: 59 },
    { name: 'Camera', category: 'electronics', price: 499 },
    { name: 'Shorts', category: 'clothing', price: 34 }
];

const App: React.FC = () => {
    const [filteredProducts, setFilteredProducts] = useState(productsList);

    const filterProducts = (category: string) => {
        if (category === "all") {
            setFilteredProducts(productsList);
        } else {
            const filtered = productsList.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="container">
            <header className="header">
                <h1>Product List</h1>
            </header>
            <section className="filterSection row">
                <button className="filterButton" onClick={() => filterProducts("all")}>All</button>
                <button className="filterButton" onClick={() => filterProducts("electronics")}>Electronics</button>
                <button className="filterButton" onClick={() => filterProducts("clothing")}>Clothing</button>
            </section>
            <div className="productItem row">
                {filteredProducts.map(product => (
                    <div className="product" key={product.name}>
                        <h3>Name: {product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
