import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, addToCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty..</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between py-2 border-b">
                            <div>
                                <img src={item.image} alt={item.name} className="w-20" />
                                <p> {item.name}-({item.quantity}) - ${item.price}</p>
                            </div>
                            {/* <button onClick={() => addToCart(item)} className=" text-md font-bold">+</button> */}

                            <button onClick={() => removeFromCart(item.id)}
                                className="text-red-500">
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-4 font-bold">Total: ${total}</div>
                </>
            )}
        </div>
    );
}
