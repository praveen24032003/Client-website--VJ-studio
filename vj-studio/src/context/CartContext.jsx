import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from localStorage on init
    useEffect(() => {
        const savedCart = localStorage.getItem('vj-cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage on change
    useEffect(() => {
        localStorage.setItem('vj-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems(prev => {
            // Check if item already exists (for sales items only, rentals/bookings are unique usually)
            if (item.type === 'sale') {
                const existing = prev.find(i => i.id === item.id && i.type === 'sale');
                if (existing) {
                    return prev.map(i =>
                        i.id === item.id && i.type === 'sale'
                            ? { ...i, quantity: i.quantity + item.quantity }
                            : i
                    );
                }
            }
            return [...prev, { ...item, cartId: Date.now() + Math.random() }];
        });
    };

    const removeFromCart = (cartId) => {
        setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    };

    const updateQuantity = (cartId, quantity) => {
        setCartItems(prev => prev.map(item =>
            item.cartId === cartId ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            if (item.type === 'rental') {
                return total + (item.price * item.days);
            } else if (item.type === 'sale') {
                return total + (item.price * item.quantity);
            }
            return total; // Bookings usually have custom pricing or no price shown
        }, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal
        }}>
            {children}
        </CartContext.Provider>
    );
};
