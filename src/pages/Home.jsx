import products from "../data/products";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

export default function Home() {
    const { addToCart } = useCart();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.name} className="h-40 mx-auto" />
                        <h2 className="font-bold">{product.name}</h2>
                        <p>${product.price}</p>
                    </Link>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
