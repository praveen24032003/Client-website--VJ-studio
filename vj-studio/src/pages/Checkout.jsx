import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MessageCircle, CheckCircle } from 'lucide-react';
import '../styles/Cart.css'; // Reuse cart styles styles
import '../styles/Checkout.css';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        mobile: ''
    });

    const [submitted, setSubmitted] = useState(false);

    if (cartItems.length === 0 && !submitted) {
        navigate('/cart');
        return null;
    }

    if (submitted) {
        return (
            <div className="checkout-success-page">
                <div className="container section text-center">
                    <CheckCircle size={80} style={{ color: '#4caf50', marginBottom: '1.5rem' }} />
                    <h1>Enquiry Sent Successfully!</h1>
                    <p>Thank you, {formData.name}. We have redirected you to WhatsApp with your order details.</p>
                    <p>We will respond to you shortly.</p>
                    <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const generateWhatsAppMessage = () => {
        const rentals = cartItems.filter(i => i.type === 'rental');
        const sales = cartItems.filter(i => i.type === 'sale');
        const bookings = cartItems.filter(i => i.type === 'booking');

        const hasRentals = rentals.length > 0;
        const hasSales = sales.length > 0;
        const hasBookings = bookings.length > 0;

        let header = "*👋 Hello VJ Studio, I would like to place an enquiry:*";
        if (hasBookings && !hasRentals && !hasSales) {
            header = "*👋 Hello VJ Studio, I would like to place a BOOKING enquiry:*";
        } else if (hasRentals && !hasBookings && !hasSales) {
            header = "*👋 Hello VJ Studio, I would like to place a RENTAL enquiry:*";
        } else if (hasSales && !hasBookings && !hasRentals) {
            header = "*👋 Hello VJ Studio, I would like to place a PURCHASE enquiry:*";
        }

        let message = `${header}\n\n`;
        message += `👤 *Name:* ${formData.name}\n`;
        message += `📱 *Mobile:* ${formData.mobile}\n\n`;

        if (hasRentals) {
            message += `--------------------------------\n`;
            message += `📷 *RENTALS:*\n`;
            rentals.forEach(item => {
                message += `• ${item.name}\n   - ${item.days} days (${item.startDate} to ${item.endDate})\n   - Price: ₹${item.totalPrice}\n`;
            });
            message += `\n`;
        }

        if (hasSales) {
            message += `--------------------------------\n`;
            message += `🛍️ *PURCHASE:*\n`;
            sales.forEach(item => {
                message += `• ${item.name}\n   - Qty: ${item.quantity}\n   - Price: ₹${(item.price * item.quantity)}\n`;
            });
            message += `\n`;
        }

        if (hasBookings) {
            message += `--------------------------------\n`;
            message += `📅 *BOOKINGS:*\n`;
            bookings.forEach(item => {
                message += `• ${item.details.packageName}\n   - Event: ${item.details.eventType}\n   - Date: ${item.details.date}\n   - Location: ${item.details.location}\n`;
            });
            message += `\n`;
        }

        message += `================================\n`;

        const total = getCartTotal();
        const deposit = rentals.length * 250;

        if (hasRentals || hasSales) {
            message += `💰 *Est. Total:* ₹${total + deposit} (incl. deposit)\n`;
        } else {
            message += `💰 *Est. Total:* Request for Quote\n`;
        }

        return encodeURIComponent(message);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.mobile) return;

        const message = generateWhatsAppMessage();
        const phoneNumber = "919750181649";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Clear cart and show success
        clearCart();
        setSubmitted(true);
    };

    const total = getCartTotal();
    const rentalCount = cartItems.filter(i => i.type === 'rental').length;

    return (
        <div className="checkout-page">
            <div className="container section">
                <h1 className="page-title text-center">Complete Your Enquiry</h1>

                <div className="checkout-container">
                    <div className="checkout-summary">
                        <h3>Order Overview</h3>
                        <ul className="checkout-list">
                            {cartItems.map((item, idx) => (
                                <li key={idx}>
                                    <span>{item.name} {item.quantity > 1 ? `x${item.quantity}` : ''}</span>
                                    <span>
                                        {item.type === 'booking' ? 'Enquiry' : `₹${item.totalPrice || (item.price * item.quantity)}`}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="checkout-total">
                            <span>Total Estimate</span>
                            <span>₹{total + (rentalCount * 250)}</span>
                        </div>
                    </div>

                    <form className="checkout-form" onSubmit={handleSubmit}>
                        <h3>Your Details</h3>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label>WhatsApp Number</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your mobile number"
                            />
                        </div>

                        <button type="submit" className="btn btn-whatsapp btn-block">
                            <MessageCircle size={20} /> Send via WhatsApp
                        </button>
                        <p className="privacy-note">
                            Clicking this will open WhatsApp with your pre-filled enquiry.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
