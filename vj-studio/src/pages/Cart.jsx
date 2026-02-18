import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ArrowLeft, Calendar, ShoppingBag, Camera } from 'lucide-react';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, getCartTotal } = useCart();
    const navigate = useNavigate();

    const rentalItems = cartItems.filter(item => item.type === 'rental');
    const saleItems = cartItems.filter(item => item.type === 'sale');
    const bookingItems = cartItems.filter(item => item.type === 'booking');

    const total = getCartTotal();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page empty-cart">
                <div className="container section text-center">
                    <ShoppingBag size={64} style={{ color: '#ccc', marginBottom: '1rem' }} />
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added anything yet.</p>
                    <div className="empty-cart-actions">
                        <Link to="/rentals" className="btn btn-primary">Browse Rentals</Link>
                        <Link to="/sales" className="btn btn-outline-dark">View Store</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container section">
                <h1 className="page-title">Your Cart ({cartItems.length})</h1>

                <div className="cart-grid">
                    <div className="cart-items">
                        {/* Rental Items */}
                        {rentalItems.length > 0 && (
                            <div className="cart-section">
                                <h3><Camera size={20} /> Rentals</h3>
                                {rentalItems.map(item => (
                                    <div key={item.cartId} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-meta">
                                                {item.days} Days ({item.startDate} to {item.endDate})
                                            </p>
                                            <p className="item-price">₹{item.totalPrice}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.cartId)} className="remove-btn">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Sale Items */}
                        {saleItems.length > 0 && (
                            <div className="cart-section">
                                <h3><ShoppingBag size={20} /> Products</h3>
                                {saleItems.map(item => (
                                    <div key={item.cartId} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-meta">Quantity: {item.quantity}</p>
                                            <p className="item-price">₹{(item.price * item.quantity).toLocaleString()}</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.cartId)} className="remove-btn">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Booking Items */}
                        {bookingItems.length > 0 && (
                            <div className="cart-section">
                                <h3><Calendar size={20} /> Bookings</h3>
                                {bookingItems.map(item => (
                                    <div key={item.cartId} className="cart-item">
                                        <img src={item.image} alt="Booking" />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-meta">
                                                {item.details.date} | {item.details.location}
                                            </p>
                                            <p className="item-price text-highlight">Price on Enquiry</p>
                                        </div>
                                        <button onClick={() => removeFromCart(item.cartId)} className="remove-btn">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="cart-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal (Rent/Sales)</span>
                            <span>₹{total.toLocaleString()}</span>
                        </div>
                        {rentalItems.length > 0 && (
                            <div className="summary-row">
                                <span>Security Deposit</span>
                                <span>₹{rentalItems.length * 250}</span>
                            </div>
                        )}
                        <div className="summary-total">
                            <span>Estimated Total</span>
                            <span>₹{(total + (rentalItems.length * 250)).toLocaleString()}*</span>
                        </div>
                        <p className="note">* Final price specifically for bookings will be confirmed via WhatsApp.</p>

                        <Link to="/checkout" className="btn btn-primary btn-block checkout-btn">
                            Proceed to Enquiry <ArrowRight size={18} />
                        </Link>

                        <Link to="/" className="continue-shopping">
                            <ArrowLeft size={16} /> Continue Browsing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
