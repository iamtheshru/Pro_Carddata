import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}
