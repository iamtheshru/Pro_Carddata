import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex justify-between p-4 bg-blue-600 text-white">
      <Link to="/" className="font-bold">Home</Link>
      <Link to="/cart">Cart ({count})</Link>
    </div>
  );
}
