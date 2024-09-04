import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
    const [products, setProducts] useState([]);

    useEffect(() =>{
        fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        .then(response => response.json())
        .then(data => setProducts(data.products));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                onClick={() => handleProductClick(product.id)}
            />
            ))}
        </div>
    );
};

const handleProductClick = (ProductId: string) => {

};

export default ProductList;