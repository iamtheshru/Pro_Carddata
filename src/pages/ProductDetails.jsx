import { useParams } from "react-router-dom";
import products from "../data/products.jsx";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product) return <p>Product not found</p>

    return (
        <div className="p-4">
            <img src={product.image} alt={product.name} className="h-48" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}


