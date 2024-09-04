import React from "react";

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    price: number;
    onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({id, name, image, price, onClick }) => {
    return (
        <div className="Product-card" onClick={onClick}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{price.toFixed(2)}</p>
        </div>
    );
};

export default ProductCard;