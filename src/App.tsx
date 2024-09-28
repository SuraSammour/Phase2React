import React, { useEffect } from 'react';
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


const displayProduct = (category: string = "all") => {
    let products = '';
    for (let i = 0; i < productsList.length; i++) {
        if (category === "all" || productsList[i].category === category) {
            products += `
            <div class="product">
                <h3>Name: ${productsList[i].name}</h3>
                <p>Category: ${productsList[i].category}</p>
                <p>Price: $${productsList[i].price}</p>
            </div>
            `;
        }
    }
    return products;
};

const App: React.FC = () => {
    
    useEffect(() => {
        const All = document.querySelector(".ALL");
        All?.addEventListener("click", () => {
            document.querySelector(".productItem")!.innerHTML = displayProduct("all");
        });
        const ELE = document.querySelector(".ELE");
        ELE?.addEventListener("click", () => {
            document.querySelector(".productItem")!.innerHTML = displayProduct("electronics");
        });
        const CLO = document.querySelector(".CLO");
        CLO?.addEventListener("click", () => {
            document.querySelector(".productItem")!.innerHTML = displayProduct("clothing");
        });
    }, []); 

    return (
        <div className="container">
            <header className="header">
                <h1>Product List</h1>
            </header>
            <section className="filterSection row">
                <button className="ALL filterButton">All</button>
                <button className="ELE filterButton">Electronics</button>
                <button className="CLO filterButton">Clothing</button>
            </section>
            <div className="productItem row" dangerouslySetInnerHTML={{ __html: displayProduct("all") }}></div>
        </div>
    );
};

export default App;
